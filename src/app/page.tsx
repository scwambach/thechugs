import { PageFactory } from '@components/global/PageFacorty'
import { client } from '@utils/client'
import { HOME_QUERY } from '@utils/queries/HOME_QUERY'
import { urlFor } from '@utils/urlFor'

async function getData() {
  const data = await client.fetch(HOME_QUERY)
  return data
}

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
    <main>
      <PageFactory components={data.pageBlocks} />
    </main>
  )
}
