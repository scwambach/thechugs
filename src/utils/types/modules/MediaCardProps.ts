import { ImageProps } from 'next/image'

export interface MediaCardProps {
  _id: string
  info?: string
  description?: string
  image: ImageProps
  link: string
  title?: string
}
