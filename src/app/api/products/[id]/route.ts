import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '@utils/client'
import { printful } from '@lib/printful-client'
import dayjs from 'dayjs'
import { NextRequest, NextResponse } from 'next/server'
import { productsQuery } from '@utils/queries/products'
import {
  BEER_FUND_SINGLE_ID,
  beerFundSettingsQuery,
  isBeerFundItem,
  resolveBeerFund,
} from '@utils/beerFund'
import type { BeerFundSettings } from '@utils/beerFund'

export async function GET(req: NextRequest) {
  const id = req.url.split('/')[req.url.split('/').length - 1]
  try {
    if (isBeerFundItem(id)) {
      // The studio prices are optional, so a failed fetch just falls back to
      // the code defaults rather than failing Snipcart's validation.
      let settings: BeerFundSettings | undefined
      try {
        settings = await client.fetch(beerFundSettingsQuery)
      } catch (error: any) {
        console.log(error)
      }

      const beerFund = resolveBeerFund(settings)
      const variant =
        id === BEER_FUND_SINGLE_ID ? beerFund.single : beerFund.thirtyPack

      return NextResponse.json(
        {
          id: id,
          price: variant.price,
          url: `/api/products/${id}`,
          customFields: [],
        },
        {
          status: 200,
        }
      )
    }

    const today = dayjs(new Date()).format('YYYY-MM-DD')
    const sanityProducts = await client.fetch(productsQuery, { today })
    const sanityProduct = sanityProducts?.find((x: any) => x._id === id)
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
