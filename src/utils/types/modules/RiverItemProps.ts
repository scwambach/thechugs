import { PortableTextBlock } from '@portabletext/types'
import { ImageProps, LinkProps } from '..'

export interface RiverItemProps {
  _key: string
  heading?: string
  fitImage?: boolean
  copy: PortableTextBlock[]
  links?: LinkProps[]
  image: ImageProps
}
