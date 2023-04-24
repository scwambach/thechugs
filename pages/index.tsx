import moment from 'moment'
import { Layout } from '@components/wrappers/Layout'
import { client } from '@utils/client'
import { HOMEPAGE_QUERY } from 'queries/homePage'
import { HomePageProps } from '@utils/types'
import { HeroBanner } from '@components/blocks/HeroBanner'
import { Events } from '@components/blocks/Events'
import { ImageGallery } from '@components/blocks/ImageGallery'
import { Music } from '@components/blocks/Music'
import { Articles } from '@components/blocks/Articles'
import { Contact } from '@components/blocks/Contact'
import { Videos } from '@components/blocks/Videos'
import { Bio } from '@components/blocks/Bio'

const today = moment(new Date()).format('YYYY-MM-DD')

export default function Home({ data }: { data: HomePageProps }) {
  const hasArticles = data.articles && data.articles.length > 0
  const hasVideos = data.videos && data.videos.length > 0
  return (
    <Layout {...data.site} hasArticles={hasArticles} hasVideos={hasVideos}>
      <HeroBanner {...data.banner} />
      <Music />
      <Events events={data.events} />
      {data.videos && data.videos.length > 0 && <Videos videos={data.videos} />}
      <Bio {...data.artistBio} />
      <ImageGallery images={data.imageGallery} />
      {data.articles && data.articles.length > 0 && (
        <Articles articles={data.articles} />
      )}
      <Contact />
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
