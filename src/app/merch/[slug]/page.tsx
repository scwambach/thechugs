import { PageTemplate } from '@components/global/PageTemplate'
import { client } from '@utils/client'
import { PRODUCT_QUERY } from '@utils/queries/PRODUCT_QUERY'
import { ProductPageProps } from '@utils/types/merch'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Details } from './components/Details'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const data = await client.fetch(PRODUCT_QUERY, {
    slug,
  })

  return {
    title: `${data.title} | Merch | The Chugs - The Band... Refreshing!`,
    description: data.description,
    openGraph: {
      images: data.thumbnail,
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
  const { page, nav } = (await getData(params.slug)) as ProductPageProps

  if (!page) {
    return notFound()
  }

  return (
    <PageTemplate nav={nav}>
      {page && (
        <Details content={page} initialVariantId={searchParams.variant} />
      )}

      <code>
        <pre
          style={{
            fontFamily: 'monospace',
            display: 'block',
            padding: '50px',
            color: '#88ffbf',
            backgroundColor: 'black',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
          }}
        >
          {JSON.stringify(page, null, '    ')}
        </pre>
      </code>
    </PageTemplate>
  )
}

async function getData(slug: string) {
  const data = await client.fetch(PRODUCT_QUERY, {
    slug,
  })

  return data
}

export const revalidate = 0

export async function generateStaticParams() {
  const pageSlugs = await client.fetch(`*[_type == 'merch'].slug.current`)

  return pageSlugs.map((slug: string) => ({
    slug,
  }))
}
