import { PortableTextBlock } from '@portabletext/types'
import { LinkProps } from '..'
import { ImageProps } from 'next/image'

export interface RiverItemProps {
  _key: string
  heading?: string
  fitImage?: boolean
  copy: PortableTextBlock[]
  links?: LinkProps[]
  image: ImageProps
}
