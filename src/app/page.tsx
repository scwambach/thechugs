import { PageFactory } from '@components/global/PageFacorty'
import { PageTemplate } from '@components/global/PageTemplate'
import { client } from '@utils/client'
import { HOME_QUERY } from '@utils/queries/HOME_QUERY'
import { urlFor } from '@utils/urlFor'

async function getData() {
  const data = await client.fetch(HOME_QUERY)
  return data
}

export const revalidate = 0

export async function generateMetadata({}) {
  const data = await client.fetch(HOME_QUERY)

  return {
    title: 'The Chugs - The Band... Refreshing!',
    description: data.description,
    openGraph: {
      images: `${urlFor(data.pageImage).width(600)}`,
    },
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <PageTemplate nav={data.nav}>
      <PageFactory components={data.pageBlocks} />
    </PageTemplate>
  )
}
