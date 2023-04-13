import { ImageProps } from '@utils/types'
import { urlFor } from '@utils/urlFor'
import Head from 'next/head'

interface SeoProps {
  title: string
  description: string
  favicon: string
  image: ImageProps
}

const Seo = ({ title, description, favicon, image }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
      <meta name="theme-color" content="#000000" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content="https://nextjs.org/" />
      <meta
        property="og:image"
        content={urlFor(image).width(1200).height(630).url()}
      />
    </Head>
  )
}

export { Seo }
