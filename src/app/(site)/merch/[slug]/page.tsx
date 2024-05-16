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

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
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
  searchParams: {
    variant: string
  }
  params: {
    slug: string
  }
}) {
  const { page, nav, globalInfo } = (await getData(
    params.slug
  )) as ProductPageProps

  if (!page) {
    return notFound()
  }

  return (
    <PageTemplate nav={nav} global={globalInfo} darkMode>
      <div className="innerPage productPage">
        {page && (
          <Details content={page} initialVariantId={searchParams.variant} />
        )}
      </div>
    </PageTemplate>
  )
}
