import { PageFactory } from '@components/global/PageFacorty'
import { PageTemplate } from '@components/global/PageTemplate'
import { urlFor } from '@utils/urlFor'

export async function generateMetadata({}) {
  const data: any = await fetch(`${process.env.SITE_URL}/api/pageData?slug=/`)

  const dataJson = await data.json()

  return {
    title: 'The Chugs - The Band... Refreshing!',
    description: dataJson.description,
    openGraph: {
      images: `${urlFor(dataJson.pageImage).width(600)}`,
    },
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function Home() {
  const data: any = await fetch(`${process.env.SITE_URL}/api/pageData?slug=/`, {
    next: {
      tags: ['home', 'page'],
    },
  })

  const dataJson = await data.json()

  return (
    <PageTemplate nav={dataJson.nav} global={dataJson.globalInfo}>
      <PageFactory components={dataJson.pageBlocks} />
    </PageTemplate>
  )
}
