import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { ImageBlock } from '@components/modules/ImageBlock'
import { PortableText } from '@portabletext/react'
import { ImageProps, LinkProps, PageBlockProps } from '@utils/types'

interface PageBannerProps extends PageBlockProps {
  image: ImageProps
  links?: LinkProps[]
}

export const PageBanner = ({
  copy,
  heading,
  image,
  links,
  subheading,
}: PageBannerProps) => {
  return (
    <div className="pageBanner">
      <ImageBlock image={image} isBackground width={2000} />
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
