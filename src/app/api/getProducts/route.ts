import { NextResponse } from 'next/server'

export async function GET() {
  const printRes = await fetch(`https://api.printful.com/store/products`, {
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    next: { revalidate: 0 },
  })
  const newItemData = await printRes.json()
  const productIds = newItemData.result.map((item: any) => item.id)

  const newArray = await Promise.all(
    productIds.map(async (item: any) => {
      const res = await fetch(`http://localhost:3030/api/getProduct/${item}`, {
        next: { revalidate: 0 },
      })
      const data = await res.json()
      return data
    })
  )

  return NextResponse.json({
    status: 200,
    body: newArray,
  })
}
