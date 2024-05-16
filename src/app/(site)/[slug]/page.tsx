import { PageFactory } from '@components/global/PageFacorty'
import { PageTemplate } from '@components/global/PageTemplate'
import { urlFor } from '@utils/urlFor'
import { notFound } from 'next/navigation'

async function getData(slug: string) {
  const data: any = await fetch(
    `${process.env.SITE_URL}/api/pageData?slug=${slug}`,
    {
      next: {
        tags: ['page'],
      },
    }
  )
  const dataJson = await data.json()

  if (!dataJson) {
    return notFound()
  }

  return dataJson
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const data: any = await fetch(
    `${process.env.SITE_URL}/api/pageData?slug=${slug}`
  )
  const dataJson = await data.json()

  if (!dataJson) {
    return notFound()
  }

  return {
    title: `${dataJson.title} | The Chugs - The Band... Refreshing!`,
    description: dataJson.description,
    openGraph: {
      images: `${urlFor(dataJson.pageImage).width(600)}`,
    },
    icons: {
      icon: '/favicon.png',
    },
  }
}

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
