import type { NextApiRequest, NextApiResponse } from 'next'

import { printful } from '@lib/printful-client'
import type {
  SnipcartShippingRate,
  PrintfulShippingItem,
} from '@utils/storeTypes'
import { NextRequest, NextResponse } from 'next/server'

const physicalItemShippingCosts: any = 6.99

interface SnipcartRequest extends NextApiRequest {
  body: {
    eventName: string
    mode: string
    createdOn: string
    content: { [key: string]: any }
  }
}

export async function POST(
  req: NextApiRequest,
) {
  const data = await req.json();
  const { eventName, content } = data

  if (eventName !== 'shippingrates.fetch' || content.items.length === 0) {
    return NextResponse.json( {}, {status: 200} );
  }

  const {
    items: cartItems,
    shippingAddress1,
    shippingAddress2,
    shippingAddressCity,
    shippingAddressCountry,
    shippingAddressProvince,
    shippingAddressPostalCode,
    shippingAddressPhone,
  } = content

  const recipient = {
    ...(shippingAddress1 && { address1: shippingAddress1 }),
    ...(shippingAddress2 && { address2: shippingAddress2 }),
    ...(shippingAddressCity && { city: shippingAddressCity }),
    ...(shippingAddressCountry && { country_code: shippingAddressCountry }),
    ...(shippingAddressProvince && { state_code: shippingAddressProvince }),
    ...(shippingAddressPostalCode && { zip: shippingAddressPostalCode }),
    ...(shippingAddressPhone && { phone: shippingAddressPhone }),
  }

  const printfulItems: any[] = []
  let hasPhysicalItems = false

  cartItems.forEach((item: any) => {
    item?.customFields?.forEach((field: any) => {
      if (field.name === 'PrintfulProduct') {
        if (field.value === 'true') printfulItems.push(item)
        if (field.value === 'false') {
          hasPhysicalItems = true
        }
      }
    })
  })

  const printfulShippingItems: PrintfulShippingItem[] = printfulItems.map(
    (item: any): PrintfulShippingItem => ({
      external_variant_id: item.id,
      quantity: item.quantity,
    })
  )

  try {
    if (printfulShippingItems.length > 0) {
      const { result } = await printful.post('shipping/rates', {
        recipient,
        items: printfulShippingItems,
      })

      const rates = result.map((rate: any) => ({
        cost: roundShippingCost(rate.rate, hasPhysicalItems),
        description: rate.name,
        userDefinedId: rate.id,
        guaranteedDaysToDelivery: rate.maxDeliveryDays,
      }));

      return NextResponse.json(  { rates: rates }, { status: 200 } );
    } else {
      const rates = [
        {
          cost: physicalItemShippingCosts,
          description: 'Flat Rate',
          userDefinedId: 'SNAILMAIL',
          guaranteedDaysToDelivery: 10,
        },
      ]
      return NextResponse.json(  { rates: rates }, { status: 200 } );
    }
  } catch (error: any) {
    return NextResponse.json(  { errors: [
      {
        key: error?.reason,
        message: error?.message,
      },
    ] }, { status: 200 } );
  }
}

const roundShippingCost = (cost: number, hasPhysicalItems: boolean) => {
  const newCost = hasPhysicalItems ? cost * 1 + physicalItemShippingCosts : cost
  return (Math.round(newCost * 100) / 100).toFixed(2)
}
