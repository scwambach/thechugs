import { PageFactory } from '@components/global/PageFacorty'
import { PageTemplate } from '@components/global/PageTemplate'
import { client } from '@utils/client'
import { PAGE_QUERY } from '@utils/queries/PAGE_QUERY'
import { urlFor } from '@utils/urlFor'
import { notFound } from 'next/navigation'

async function getData(slug: string) {
  const data = await client.fetch(PAGE_QUERY, {
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
  const data = await client.fetch(PAGE_QUERY, {
    slug,
  })

  if (!data) {
    return notFound()
  }

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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await getData(slug)

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
