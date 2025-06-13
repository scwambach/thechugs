import { ImageProps } from 'next/image'

export interface PostCardProps {
  _id: string
  description: string
  mainImage: ImageProps
  publishedAt: string
  slug: string
  title: string
}
