import { PageFactory } from '@components/global/PageFacorty'
import { PageTemplate } from '@components/global/PageTemplate'
import { client } from '@utils/client'
import { PAGE_QUERY } from '@utils/queries/PAGE_QUERY'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug)

  if (!data) {
    return notFound()
  }

  return (
    <PageTemplate nav={data.nav} global={data.globalInfo}>
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

export async function generateStaticParams() {
  const pageSlugs = await client.fetch(`*[_type == 'page'].slug.current`)

  return pageSlugs.map((slug: string) => ({
    slug,
  }))
}
