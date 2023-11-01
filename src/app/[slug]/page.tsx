import { PageFactory } from '@components/global/PageFacorty'
import { client } from '@utils/client'
import { PAGE_QUERY } from '@utils/queries/PAGE_QUERY'
import { notFound } from 'next/navigation'

async function getData(slug: string) {
  const data = await client.fetch(PAGE_QUERY, {
    slug,
  })

  return data
}

export const revalidate = 0

export async function generateStaticParams() {
  const pageSlugs = await client.fetch(`*[_type == 'page'].slug.current`)

  return pageSlugs.map((slug: string) => ({
    slug,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug)

  if (!data) {
    return notFound()
  }

  return (
    <main>
      <PageFactory components={data.pageBlocks} />
    </main>
  )
}
