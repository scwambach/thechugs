import type { NextApiRequest, NextApiResponse } from "next";

import { printful } from "@lib/printful-client";
import type {
  SnipcartShippingRate,
  PrintfulShippingItem,
} from "@utils/storeTypes";

interface SnipcartRequest extends NextApiRequest {
  body: {
    eventName: string;
    mode: string;
    createdOn: string;
    content: { [key: string]: any };
  };
}

type Data = {
  /** An array of shipping rates. */
  rates: SnipcartShippingRate[];
};

type Error = {
  errors: { key: string; message: string }[];
};

export default async function handler(
  req: SnipcartRequest,
  res: NextApiResponse<Data | Error>
) {
  const { eventName, content } = req.body;

  if (eventName !== "shippingrates.fetch") return res.status(200).end();
  if (content.items.length === 0) return res.status(200).end();

  const {
    items: cartItems,
    shippingAddress1,
    shippingAddress2,
    shippingAddressCity,
    shippingAddressCountry,
    shippingAddressProvince,
    shippingAddressPostalCode,
    shippingAddressPhone,
  } = content;

  const recipient = {
    ...(shippingAddress1 && { address1: shippingAddress1 }),
    ...(shippingAddress2 && { address2: shippingAddress2 }),
    ...(shippingAddressCity && { city: shippingAddressCity }),
    ...(shippingAddressCountry && { country_code: shippingAddressCountry }),
    ...(shippingAddressProvince && { state_code: shippingAddressProvince }),
    ...(shippingAddressPostalCode && { zip: shippingAddressPostalCode }),
    ...(shippingAddressPhone && { phone: shippingAddressPhone }),
  };

  const printfulItems: any[] = [];
  let hasPhysicalItems = false;

  cartItems.forEach((item: any) => {
    item?.customFields?.forEach((field: any) => {
      if (field.name === 'PrintfulProduct') {
        if (field.value === 'true') printfulItems.push(item);
        if (field.value === 'false') {
          hasPhysicalItems = true;
        }
      }
    });
  });

  const printfulShippingItems: PrintfulShippingItem[] = printfulItems.map(
    (item: any): PrintfulShippingItem => ({
      external_variant_id: item.id,
      quantity: item.quantity,
    })
  );

  try {
    const { result } = await printful.post("shipping/rates", {
      recipient,
      items: printfulShippingItems,
    });

    res.status(200).json({
      rates: result.map((rate: any) => ({
        cost: roundShippingCost(rate.rate, hasPhysicalItems),
        description: rate.name,
        userDefinedId: rate.id,
        guaranteedDaysToDelivery: rate.maxDeliveryDays,
      })),
    });
  } catch (error: any) {
    console.log(error);
    res.status(200).json({
      errors: [
        {
          key: error?.reason,
          message: error?.message,
        },
      ],
    });
  }
}

const roundShippingCost = (cost: number, hasPhysicalItems: boolean) => {
  const newCost = hasPhysicalItems ? cost*1+7 : cost;
  return (Math.round(newCost * 100) / 100).toFixed(2);
};
