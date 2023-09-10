import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { PortableText } from '@portabletext/react'
import { bgStyles } from '@utils/bgStyles'
import { client } from '@utils/client'
import { noOrphans } from '@utils/noOrphans'
import { ImageProps, LinkProps, PageBlockProps } from '@utils/types'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'

interface CtaBannerProps extends PageBlockProps {
  backgroundImage: ImageProps
  links?: LinkProps[]
}

const ctaBannerImage = (imageUrlBuilder: any, _options: any) => {
  return imageUrlBuilder.width(1200).saturation(-100)
}

export const CtaBanner = ({
  heading,
  headingLevel = '2',
  subheading,
  backgroundImage,
  backgroundColor,
  copy,
  links,
}: CtaBannerProps) => {
  const imageProps = useNextSanityImage(client, backgroundImage, {
    imageBuilder: ctaBannerImage,
  })

  return (
    <div
      className={`ctaBanner${
        backgroundColor && !backgroundImage
          ? ` bg-${backgroundColor}`
          : !!backgroundImage
          ? ' bg-image'
          : ''
      }`}
    >
      {!!backgroundImage && (
        <>
          <Image
            {...imageProps}
            alt=""
            className="bg-fit"
            blurDataURL={backgroundImage.lqip}
            style={bgStyles as any}
            placeholder="blur"
          />
          <div className="overlay" />
        </>
      )}
      <Container>
        <div className="copy">
          {heading && (
            <Heading level={headingLevel}>{noOrphans(heading)}</Heading>
          )}
          {subheading && <p className="subheading">{subheading}</p>}
          {copy && (
            <div className="message">
              <PortableText value={copy} />
            </div>
          )}

          {links && <ButtonList items={links} />}
        </div>
      </Container>
    </div>
  )
}
