import { PortableTextBlock } from '@portabletext/types'
import { ImageProps } from '..'

export interface PostCardProps {
  _id: string
  mainImage: ImageProps
  title: string
  slug: string
  copy: PortableTextBlock[]
  publishedAt: string
}
