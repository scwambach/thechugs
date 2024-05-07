import type { NextApiRequest, NextApiResponse } from 'next'

import { printful } from '@lib/printful-client'
import type { SnipcartTaxItem, PrintfulShippingItem } from '@utils/storeTypes'
import { NextRequest, NextResponse } from 'next/server'

interface SnipcartRequest extends NextApiRequest {
  body: {
    eventName: string
    mode: string
    createdOn: string
    content: { [key: string]: any }
  }
}

type Data = {
  /** An array of tax rates. */
  taxes: SnipcartTaxItem[]
}

type Error = {
  errors: { key: string; message: string }[]
}

export async function POST(req: NextApiRequest) {
  const data = await req.json()
  const { eventName, content } = data


  if (eventName !== 'taxes.calculate' || content.items.length === 0) {
    return NextResponse.json({}, { status: 200 })
  }

  const {
    items: cartItems,
    shippingAddress,
    shippingRateUserDefinedId,
  } = content

  if (!shippingAddress) {
    return NextResponse.json(
      {
        errors: [
          {
            key: 'no_address',
            message: 'No address to calculate taxes',
          },
        ],
      },
      { status: 200 }
    )
  }

  const { address1, address2, city, country, province, postalCode, phone } =
    shippingAddress

  const recipient = {
    ...(address1 && { address1 }),
    ...(address2 && { address2 }),
    ...(city && { city: city }),
    ...(country && { country_code: country }),
    ...(province && { state_code: province }),
    ...(postalCode && { zip: postalCode }),
    ...(phone && { phone }),
  }

  const items: PrintfulShippingItem[] = cartItems.map(
    (item: any): PrintfulShippingItem => ({
      external_variant_id: item.id,
      quantity: item.quantity,
    })
  )

  try {
    const { result } = await printful.post('orders/estimate-costs', {
      shipping: shippingRateUserDefinedId,
      recipient,
      items,
    })

    return NextResponse.json(
      {
        taxes: [
          {
            name: 'VAT',
            amount: result.costs.vat,
            rate: 0,
          },
        ],
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.log(error)


    return NextResponse.json(
      {
        errors: [
          {
            key: error?.reason,
            message: error?.message,
          },
        ],
      },
      { status: 200 }
    )
  }
}
