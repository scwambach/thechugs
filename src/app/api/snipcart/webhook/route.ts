import type { NextApiRequest, NextApiResponse } from 'next'

import createOrder from '@lib/create-order'

import type { SnipcartRequest, SnipcartWebhookEvent } from '@utils/storeTypes'
import { NextResponse } from 'next/server'

export async function POST(req: NextApiRequest) {
  const allowedEvents: SnipcartWebhookEvent[] = [
    'order.completed',
    'customauth:customer_updated',
  ]

  const data = await req.json()
  const { eventName, content } = data

  if (req.method !== 'POST' || !allowedEvents.includes(eventName))
    return NextResponse.json(
      {
        errors: [
          {
            key: 'Not allowed',
            message: 'Not allowed',
          },
        ],
      },
      { status: 400 }
    )

  // if (!token) return res.status(401).json({ message: "Not Authorized" });

  // try {
  //   const verifyToken = await fetch(
  //     `https://app.snipcart.com/api/requestvalidation/${token}`
  //   );

  //   if (!verifyToken.ok)
  //     return res.status(401).json({ message: "Not Authorization" });
  // } catch (err) {
  //   console.log(err);
  //   return res
  //     .status(500)
  //     .json({ message: "Unable to verify Snipcart webhook token" });
  // }

  try {
    switch (eventName) {
      case 'order.completed':
        await createOrder(content)
        break
      case 'customauth:customer_updated':
        return NextResponse.json(
          {
            errors: [
              {
                key: 'Success',
                message: 'Customer Updated',
              },
            ],
          },
          { status: 200 }
        )
      default:
        throw new Error('No such event handler exists')
    }

    return NextResponse.json(
      {
        errors: [
          {
            key: 'Success',
            message: 'Done',
          },
        ],
      },
      { status: 200 }
    )
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      {
        errors: [
          {
            key: 'Error',
            message: 'Something went wrong',
          },
        ],
      },
      { status: 500 }
    )
  }
}
