import moment from 'moment'
import { Layout } from '@components/wrappers/Layout'
import { client } from '@utils/client'
import { HOMEPAGE_QUERY } from 'queries/homePage'
import { HomePageProps } from '@utils/types'
import { HeroBanner } from '@components/blocks/HeroBanner'
import { Events } from '@components/blocks/Events'
import { ImageGallery } from '@components/blocks/ImageGallery'
import { Music } from '@components/blocks/Music'
import { Articles } from '@components/blocks/Articles'
import { Contact } from '@components/blocks/Contact'
import { Videos } from '@components/blocks/Videos'
import { Bio } from '@components/blocks/Bio'
import { Releases } from '@components/blocks/Releases'
import shuffle from 'lodash.shuffle'
import { printful } from '@lib/printful-client'
import { formatVariantName } from '@lib/format-variant-name'
import { PrintfulProduct } from '@utils/storeTypes'
import ProductGrid from '@components/blocks/ProductGrid'

const today = moment(new Date()).format('YYYY-MM-DD')

export default function Home({ data }: { data: HomePageProps }) {
  const hasArticles = data.articles && data.articles.length > 0
  const hasVideos = data.videos && data.videos.length > 0
  return (
    <Layout {...data.site} hasArticles={hasArticles} hasVideos={hasVideos}>
      <HeroBanner {...data.banner} />
      <Releases releases={data.releases} />
      <Events events={data.events} />
      <ProductGrid products={data.products} />
      <Bio {...data.artistBio} />
      <Music />
      {data.videos && data.videos.length > 0 && <Videos videos={data.videos} />}
      <ImageGallery images={data.imageGallery} />
      {data.articles && data.articles.length > 0 && (
        <Articles articles={data.articles} />
      )}
      <Contact />
    </Layout>
  )
}

export async function getStaticProps() {
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
