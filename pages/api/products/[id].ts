import type { NextApiRequest, NextApiResponse } from "next";
import { client } from '@utils/client'
import { printful } from "@lib/printful-client";
import moment from "moment";
import { PRODUCTS_QUERY } from "queries/products";

type Data = {
  id: string;
  price: number;
  url: string;
  customFields: any;
};

type Error = {
  errors: { key: string; message: string }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { id } = req.query;

  try {
    const today = moment(new Date()).format('YYYY-MM-DD')
    const sanityProducts = await client.fetch(PRODUCTS_QUERY, { today });
    const sanityProduct = sanityProducts?.find((x: any) => x._id === id);

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    if (sanityProduct) {
      res.status(200).json({
        id: id as string,
        price: sanityProduct.price,
        url: `/api/products/${id}`,
        customFields: []
      });
    } else {
      const { result } = await printful.get(`store/variants/@${id}`);
      res.status(200).json({
        id: id as string,
        price: result.retail_price,
        url: `/api/products/${id}`,
        customFields: [],
      });
    }


  } catch (error: any) {
    console.log(error);
    res.status(404).json({
      errors: [
        {
          key: error?.message,
          message: error?.message,
        },
      ],
    });
  }
}
