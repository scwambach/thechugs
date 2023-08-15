import { PortableTextBlock } from '@portabletext/types'
import { ImageProps, LinkProps, PageBlockProps } from '..'

export interface PageBannerProps extends PageBlockProps {
  heading: string
  subheading?: string
  image: ImageProps
  links?: LinkProps[]
  copy?: PortableTextBlock[]
}
