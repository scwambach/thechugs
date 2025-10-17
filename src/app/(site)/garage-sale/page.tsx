import { Products } from '@components/blocks'
import { PageTemplate } from '@components/global/PageTemplate'
import { Heading } from '@components/modules/Heading'
import { GARAGE_SALE_QUERY } from '@utils/queries/GARAGE_SALE_QUERY'
import { client } from '@utils/client'

async function getData() {
  const data = await client.fetch(GARAGE_SALE_QUERY)
  return data
}

export const revalidate = 0

export async function generateMetadata({}) {
  return {
    title: 'Garage Sale | The Chugs - The Band... Refreshing!',
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function Home() {
  const data = await getData()

  const graveFirst = data.items.sort(
    (a: { title: string }, b: { title: string }) => {
      if (a.title === 'Grave Plot') return -1
      if (b.title === 'Grave Plot') return 1
      return 0
    }
  )

  return (
    <PageTemplate nav={data.nav} global={data.globalInfo} darkMode>
      <section className="page-component bg-white">
        <div className="heading-container container wide">
          <div className="inner">
            <Heading level="1">Garage Sale</Heading>

            <p className="subheading">
              Get all you want of what we DON'T want!!
            </p>
          </div>
        </div>
        <Products products={graveFirst} _key="0" _type="block" noButton />
      </section>
    </PageTemplate>
  )
}
