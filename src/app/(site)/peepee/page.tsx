import Peepee from '@components/modules/PeePee'

export async function generateMetadata({}) {
  return {
    title: 'Pee Pee',
    icons: {
      icon: '/favicon.png',
    },
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function Home() {
  return <Peepee />
}
