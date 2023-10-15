import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // Extract the 'id' from the URL path by finding the last segment.
  const id: any = request.url.slice(request.url.lastIndexOf('/') + 1)

  // Fetch product data from the Printful API using the extracted 'id'.
  const product = await fetch(`https://api.printful.com/store/products/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    next: { revalidate: 0 }, // Set revalidation options for caching.
  })

  // Parse the JSON response from the Printful API.
  const data = await product.json()

  // Check if 'data' is falsy, and return an error response if it is.
  if (!data) {
    return NextResponse.json({
      status: 500,
      body: `Error fetching product ${id}`,
    })
  }

  // Return a JSON response with the retrieved product data.
  return NextResponse.json(data)
}
