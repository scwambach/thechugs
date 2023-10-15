import { Fragment } from 'react'
import { slugify } from '@utils/slugify'
import { ProductDataProps } from '@utils/types'

const getData = async () => {
  const data = await fetch(`http://localhost:3030/api/getProducts`)
  const prodData = await data.json()
  return prodData
}

export default async function Home() {
  const data: {
    status: number
    body: {
      result: ProductDataProps
    }[]
  } = await getData()
  return (
    <main>
      <code>
        <pre
          style={{
            fontFamily: 'monospace',
            display: 'block',
            padding: '50px',
            color: '#88ffbf',
            backgroundColor: 'black',
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'auto',
          }}
        >
          {data.body.map(({ result: item }) => (
            <Fragment key={item.sync_product.id}>
              {`{
                "_type": "merch",
  "productId": ${item.sync_product.id},
  "externalId": "${item.sync_product.external_id}",
  "title": "${item.sync_product.name}",
  "thumbnail": "${item.sync_product.thumbnail_url}",
  "slug": {
    "_type": "slug",
    "current": "${slugify(item.sync_product.name)}"
  },
  "variants": [
    ${item.sync_variants.map((variant, index) => {
      return `
      {
        "title": "${variant.name}",
        "itemId": ${variant.id},
        "variantId": ${variant.variant_id},
        "sku": "${variant.sku}",
        "externalId": "${variant.external_id}",
        "syncProductId": ${variant.sync_product_id},
        "image": "${
          variant.files[1]
            ? variant.files[1].preview_url
            : item.sync_product.thumbnail_url
        }",
        "price": ${variant.retail_price}
      }`
    })}
  ]
                }`}
              <br />
            </Fragment>
          ))}
        </pre>
      </code>
    </main>
  )
}
