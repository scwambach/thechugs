import type { NextApiRequest, NextApiResponse } from "next";

import { printful } from "@lib/printful-client";

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
    const { result } = await printful.get(`store/variants/@${id}`);

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    res.status(200).json({
      id: id as string,
      price: result.retail_price,
      url: `/api/products/${id}`,
      customFields: []
    });
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
