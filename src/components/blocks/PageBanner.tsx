import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { ImageBlock } from '@components/modules/ImageBlock'
import { PortableTextBlock } from '@portabletext/types'
import { urlFor } from '@utils/urlFor'

interface PageBannerProps {
  _type: string
  _key: string
  heading: string
  subheading?: string
  image: {
    asset: {
      _ref: string
      _type: string
    }
    lqip: string
  }
  links?: {
    _key: string
    linkType: 'social' | 'url'
    text: string
    url: string
  }[]
  copy?: PortableTextBlock[]
}

const PageBanner = ({ image, heading }: PageBannerProps) => {
  return (
    <div className="pageBanner">
      <ImageBlock src={urlFor(image).url()} lqip={image.lqip} isBackground />
      <Container size="wide">
        <Heading level={1}>{heading}</Heading>
      </Container>
    </div>
  )
}

export { PageBanner }
