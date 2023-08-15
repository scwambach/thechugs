import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { ImageBlock } from '@components/modules/ImageBlock'
import { PortableText } from '@portabletext/react'
import { PageBannerProps } from '@utils/types/blocks/PageBanner'
import { urlFor } from '@utils/urlFor'

export const PageBanner = ({
  image,
  heading,
  subheading,
  copy,
  links,
}: PageBannerProps) => {
  return (
    <div className="pageBanner">
      <ImageBlock src={urlFor(image).url()} lqip={image.lqip} isBackground />
      <Container size="wide">
        {subheading && <p>{subheading}</p>}
        <Heading level={1}>{heading}</Heading>
        {copy && <PortableText value={copy} />}
        {links && <ButtonList items={links} />}
      </Container>
    </div>
  )
}
