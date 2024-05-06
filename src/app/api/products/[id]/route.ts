import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '@utils/client'
import { printful } from '@lib/printful-client'
import moment from 'moment'
import { NextRequest, NextResponse } from 'next/server'
import { productsQuery } from '@utils/queries/products'

type Data = {
  id: string
  price: number
  url: string
  customFields: any
}

type Error = {
  errors: { key: string; message: string }[]
}
export async function GET(
  req: NextRequest,
  res: NextApiResponse<Data | Error>
) {
  const id = req.url.split('/')[req.url.split('/').length - 1]
  try {
    const today = moment(new Date()).format('YYYY-MM-DD')
    const sanityProducts = await client.fetch(productsQuery, { today })
    const sanityProduct = sanityProducts?.find((x: any) => x.externalId === id)
    console.log(sanityProduct)
    if (sanityProduct) {
      return NextResponse.json(
        {
          id: id,
          price: sanityProduct.price,
          url: `/api/products/${id}`,
          customFields: [],
        },
        {
          status: 200,
        }
      )
    } else {
      const { result } = await printful.get(`store/variants/@${id}`)

      return NextResponse.json(
        {
          id: id,
          price: result.retail_price,
          url: `/api/products/${id}`,
          customFields: [],
        },
        {
          status: 200,
        }
      )
    }
  } catch (error: any) {
    console.log(error)
    return new Response(error?.message, {
      status: 404,
    })
  }
}
