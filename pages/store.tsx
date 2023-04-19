import { Layout } from '@components/wrappers/Layout'
import { HeroBanner } from '@components/blocks/HeroBanner'
import * as React from 'react'
import { GetStaticProps } from 'next'
import shuffle from 'lodash.shuffle'
import { BannerProps, SiteProps } from '@utils/types'
import { printful } from '@lib/printful-client'
import { formatVariantName } from '@lib/format-variant-name'
import { PrintfulProduct } from '@utils/storeTypes'
import ProductGrid from '@components/blocks/ProductGrid'
import moment from 'moment'
import { client } from '@utils/client'
import { HOMEPAGE_QUERY } from 'queries/homePage'

const today = moment(new Date()).format('YYYY-MM-DD')
export interface StorePageProps {
  banner: BannerProps
  site: SiteProps
  products: PrintfulProduct[]
}

export default function Store({ data }: { data: StorePageProps }) {
  return (
    <Layout {...data.site}>
      <HeroBanner {...data.banner} />
      <ProductGrid products={data.products} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.fetch(HOMEPAGE_QUERY, {
    today,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  const { result: productIds } = await printful.get('sync/products')

  const allProducts = await Promise.all(
    productIds.map(
      async ({ id }: { id: any }) => await printful.get(`sync/products/${id}`)
    )
  )

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }: { result: any }) => ({
      ...sync_product,
      //@ts-ignore
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  )

  products.push(...data.products);

  return {
    props: {
      data: {
        ...data,
        products: shuffle(products),
      },
    },
  }
}
