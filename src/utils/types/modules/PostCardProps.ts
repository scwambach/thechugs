import { PortableTextBlock } from '@portabletext/types'
import { ImageProps } from '..'

export interface PostCardProps {
  _id: string
  description: string
  copy: PortableTextBlock[]
  mainImage: ImageProps
  publishedAt: string
  slug: string
  title: string
}
