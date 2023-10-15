import { NextResponse } from 'next/server'
import { slugify } from '@utils/slugify'

export async function GET() {
  // Fetch data from the Printful API.
  const printRes = await fetch(`https://api.printful.com/store/products`, {
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    next: { revalidate: 0 }, // Set revalidation options for caching.
  })

  // Parse the JSON response from the Printful API.
  const newItemData = await printRes.json()

  // Check if newItemData is falsy, and return an error response if it is.
  if (!newItemData) {
    return NextResponse.json({
      status: 500,
      body: 'Error fetching all products',
    })
  }

  // Extract an array of product IDs from the newItemData.
  const productIds = newItemData.result.map((item: any) => item.id)

  // Use Promise.all to concurrently fetch data for each product.
  const newArray = await Promise.all(
    productIds.map(async (item: any) => {
      const res = await fetch(`http://localhost:3030/api/getProduct/${item}`, {
        next: { revalidate: 0 }, // Set revalidation options for caching.
      })
      const data = await res.json()
      return data
    })
  )

  // Construct a response in ndJSON format to be used in Sanity.
  return NextResponse.json({
    status: 200,
    body: `${newArray.map(
      ({ result: item }) =>
        `{"_type": "merch","productId": ${
          item.sync_product.id
        },"externalId": "${item.sync_product.external_id}","title": "${
          item.sync_product.name
        }","thumbnail": "${
          item.sync_product.thumbnail_url
        }","slug": {"_type": "slug","current": "${slugify(
          item.sync_product.name
        )}"},"variants": [${item.sync_variants.map((variant: any) => {
          return `{"title": "${variant.name}","itemId": ${
            variant.id
          },"variantId": ${variant.variant_id},"sku": "${
            variant.sku
          }","externalId": "${variant.external_id}","syncProductId": ${
            variant.sync_product_id
          },"image": "${
            variant.files[1]
              ? variant.files[1].preview_url
              : item.sync_product.thumbnail_url
          }","price": ${variant.retail_price}}`
        })}]}`
    )}`,
  })
}
