import { ProductScanner } from '@components/modules/ProductScanner'
import { client } from '@utils/client'
import { GARAGE_SALE_QUERY } from '@utils/queries/GARAGE_SALE_QUERY'
import { ProductCardProps } from '@utils/types/modules/ProductCardProps'
import { Fragment } from 'react'

async function getData() {
  const data = await client.fetch(GARAGE_SALE_QUERY)
  return data
}

export const revalidate = 0

export async function generateMetadata({}) {
  return {
    title: 'POS page | The Chugs - The Band... Refreshing!',
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <div className="productGrid">
      {data.items?.map((product: ProductCardProps) => (
        <Fragment key={product._id}>
          {product && <ProductScanner {...product} />}
        </Fragment>
      ))}
    </div>
  )
}
