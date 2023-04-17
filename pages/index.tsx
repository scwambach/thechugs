import moment from 'moment'
import { Layout } from '@components/wrappers/Layout'
import { client } from '@utils/client'
import { HOMEPAGE_QUERY } from 'queries/homePage'
import { HomePageProps } from '@utils/types'
import { HeroBanner } from '@components/blocks/HeroBanner'
import { Events } from '@components/blocks/Events'
import { ImageGallery } from '@components/blocks/ImageGallery'
import { Music } from '@components/blocks/Music'

const today = moment(new Date()).format('YYYY-MM-DD')

export default function Home({ data }: { data: HomePageProps }) {
  return (
    <Layout {...data.site}>
      <HeroBanner {...data.banner} />
      <Music />
      <Events events={data.events} />

      <ImageGallery images={data.imageGallery} />
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(HOMEPAGE_QUERY, {
    today,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: { data } }
}
