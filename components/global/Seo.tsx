import Head from 'next/head'

interface SeoProps {
  title: string
  description: string
  favicon: string
}

const Seo = ({ title, description, favicon }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
    </Head>
  )
}

export { Seo }
