import { ImageProps } from '..'

export interface MediaCardProps {
  _id: string
  info?: string
  description?: string
  image: ImageProps
  link: string
  title?: string
}
