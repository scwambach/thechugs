import { NextResponse } from 'next/server'
import { slugify } from '@utils/slugify'

export async function GET() {
  // Fetch data from the Sanity API.
  const sanityMerch = await fetch(
    `https://o0jv7xwk.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'merch'%5D`,
    {
      next: { revalidate: 0 }, // Set revalidation options for caching.
    }
  )

  const sanityMerchData = await sanityMerch.json()

  if (!Array.isArray(sanityMerchData?.result)) {
    return NextResponse.json(
      {
        status: 502,
        body: `Error fetching existing merch from Sanity: ${
          sanityMerchData?.error?.description ?? `HTTP ${sanityMerch.status}`
        }`,
      },
      { status: 502 }
    )
  }

  // Fetch data from the Printful API.
  const printRes = await fetch(`https://api.printful.com/store/products`, {
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    next: { revalidate: 0 }, // Set revalidation options for caching.
  })

  // Parse the JSON response from the Printful API.
  const newItemData = await printRes.json()

  if (!printRes.ok || !Array.isArray(newItemData?.result)) {
    const reason =
      newItemData?.error?.message ??
      (typeof newItemData?.result === 'string' ? newItemData.result : null) ??
      `HTTP ${printRes.status}`

    console.error('Printful store/products failed:', printRes.status, reason)

    return NextResponse.json(
      {
        status: printRes.status || 502,
        body: `Error fetching products from Printful: ${reason}`,
      },
      { status: printRes.status || 502 }
    )
  }

  // Only show the items that are not in the Sanity database.
  const filteredArray = newItemData.result.filter(
    (item: any) =>
      !sanityMerchData.result.find(
        (sanityItem: any) => sanityItem.externalId === item.external_id
      )
  )

  // // make an array from filteredArray, but just the the result property
  // const filteredResult = filteredArray.map((item: any) => item.result)

  // Extract an array of product IDs from the newItemData.
  const productIds = filteredArray.map((item: any) => item.id)

  // Use Promise.all to concurrently fetch data for each product.
  const newArray = await Promise.all(
    productIds.map(async (item: any) => {
      const res = await fetch(
        `${process.env.SITE_URL}/api/getProduct/${item}`,
        {
          next: { revalidate: 0 }, // Set revalidation options for caching.
        }
      )
      const data = await res.json()
      return data
    })
  )

  // Pick the generated mockup image for a variant
  const getVariantImage = (variant: any, productThumbnail: string) => {
    const files = variant.files ?? []
    const mockup = files.find(
      (file: any) => file.type === 'preview' || file.type === 'mockup'
    )

    return mockup?.preview_url ?? productThumbnail ?? files[0]?.preview_url
  }

  const products = newArray.filter(
    (entry: any) => entry?.result?.sync_product && entry?.result?.sync_variants
  )

  if (products.length < newArray.length) {
    console.error(
      `Skipped ${newArray.length - products.length} product(s) with a failed detail fetch`
    )
  }

  const mutations = products.map(({ result: item }: any) => {
    return {
      createOrReplace: {
        _type: 'merch',
        _key: `${item.sync_product.id}`,
        productId: item.sync_product.id,
        externalId: `${item.sync_product.external_id}`,
        title: `${item.sync_product.name}`,
        thumbnail: `${item.sync_product.thumbnail_url}`,
        slug: {
          _type: 'slug',
          current: `${slugify(item.sync_product.name)}`,
        },
        variants: item.sync_variants.map((variant: any) => {
          return {
            _key: `${variant.variant_id}`,
            title: `${variant.name}`,
            itemId: variant.id,
            variantId: variant.variant_id,
            sku: variant.sku,
            externalId: `${variant.external_id}`,
            syncProductId: variant.sync_product_id,
            image: `${getVariantImage(
              variant,
              item.sync_product.thumbnail_url
            )}`,
            price: parseInt(variant.retail_price),
          }
        }),
      },
    }
  })

  // Only write when there is something to write
  if (mutations.length > 0) {
    const mutateRes = await fetch(
      `https://${process.env.SANITY_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`,
      {
        next: { revalidate: 0 }, // Set revalidation options for caching.
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
        },
        body: JSON.stringify({ mutations }),
      }
    )

    const mutateData = await mutateRes.json()

    if (!mutateRes.ok) {
      const reason =
        mutateData?.error?.description ??
        mutateData?.message ??
        `HTTP ${mutateRes.status}`

      console.error('Sanity mutate failed:', mutateRes.status, reason)

      return NextResponse.json(
        {
          status: 502,
          body: `Error writing products to Sanity: ${reason}`,
        },
        { status: 502 }
      )
    }
  }

  // Construct a response in ndJSON format to be used in Sanity.
  return NextResponse.json({
    status: 200,
    body: mutations.length > 0 ? mutations : 'No new items to add',
  })
}
