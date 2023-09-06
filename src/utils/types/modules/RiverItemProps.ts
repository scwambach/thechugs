import { PortableTextBlock } from '@portabletext/types'
import { ImageProps, LinkProps } from '..'

export interface RiverItemProps {
  heading: string
  copy: PortableTextBlock[]
  links?: LinkProps[]
  image: ImageProps
}
