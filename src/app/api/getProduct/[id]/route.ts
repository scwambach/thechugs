import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const id: any = request.url.slice(request.url.lastIndexOf('/') + 1)

  const product = await fetch(`https://api.printful.com/store/products/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    next: { revalidate: 0 },
  })

  const data = await product.json()

  return NextResponse.json(data)
}
