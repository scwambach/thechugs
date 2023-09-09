import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { PortableText } from '@portabletext/react'
import { bgStyles } from '@utils/bgStyles'
import { client } from '@utils/client'
import { ImageProps, LinkProps, PageBlockProps } from '@utils/types'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'

interface PageBannerProps extends PageBlockProps {
  image: ImageProps
  links?: LinkProps[]
}

const pageBannerImage = (imageUrlBuilder: any, _options: any) => {
  return imageUrlBuilder.width(2000)
}

export const PageBanner = ({
  copy,
  heading,
  image,
  links,
  subheading,
}: PageBannerProps) => {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: pageBannerImage,
  })

  return (
    <div className="pageBanner">
      <Image
        {...imageProps}
        alt=""
        className="bg-fit"
        blurDataURL={image.lqip}
        style={bgStyles as any}
        placeholder="blur"
      />
      <Container size="wide">
        {subheading && <p className="subheading">{subheading}</p>}
        <Heading level="1">{heading}</Heading>
      </Container>
      <Container size="narrower" className="copy">
        {copy && <PortableText value={copy} />}
        {links && <ButtonList items={links} />}
      </Container>
    </div>
  )
}
