import { PageFactory } from '@components/global/PageFacorty'
import { PageTemplate } from '@components/global/PageTemplate'
import { client } from '@utils/client'
import { PAGE_QUERY } from '@utils/queries/PAGE_QUERY'
import { urlFor } from '@utils/urlFor'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug)

  if (!data) {
    return notFound()
  }

  return (
    <PageTemplate
      nav={data.nav}
      global={data.globalInfo}
      darkMode={data.pageBlocks[0].backgroundColor === 'white'}
    >
      <PageFactory components={data.pageBlocks} />
    </PageTemplate>
  )
}

async function getData(slug: string) {
  const data = await client.fetch(PAGE_QUERY, {
    slug,
  })

  return data
}

export const revalidate = 0

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const data = await client.fetch(PAGE_QUERY, {
    slug,
  })

  return {
    title: `${data.title} | The Chugs - The Band... Refreshing!`,
    description: data.description,
    openGraph: {
      images: `${urlFor(data.pageImage).width(600)}`,
    },
    icons: {
      icon: '/favicon.png',
    },
  }
}

export async function generateStaticParams() {
  const pageSlugs = await client.fetch(`*[_type == 'page'].slug.current`)

  return pageSlugs.map((slug: string) => ({
    slug,
  }))
}
