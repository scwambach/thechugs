import { PageTemplate } from '@components/global/PageTemplate'
import { client } from '@utils/client'
import { PRODUCT_QUERY } from '@utils/queries/PRODUCT_QUERY'
import { ProductPageProps } from '@utils/types/merch'
import { notFound } from 'next/navigation'
import { Details } from './components/Details'

async function getData(slug: string) {
  const data = await client.fetch(PRODUCT_QUERY, {
    slug,
  })

  if (!data) {
    return notFound()
  }

  return data
}

export const revalidate = 0

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { page } = await client.fetch(PRODUCT_QUERY, {
    slug,
  })

  if (!page) {
    return notFound()
  }

  return {
    title: `${page.title} | Merch | The Chugs - The Band... Refreshing!`,
    description: page.description,
    openGraph: {
      images: page.thumbnail,
    },
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function ProductPage({
  searchParams,
  params,
}: {
  searchParams: Promise<{
    variant: string
  }>
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { variant } = await searchParams
  const { page, nav, globalInfo } = (await getData(slug)) as ProductPageProps

  if (!page) {
    return notFound()
  }

  return (
    <PageTemplate nav={nav} global={globalInfo} darkMode>
      <div className="innerPage productPage">
        {page && <Details content={page} initialVariantId={variant} />}
      </div>
    </PageTemplate>
  )
}
