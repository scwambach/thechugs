import { ImageProps } from '..'

export interface ProductCardProps {
  _id: string
  slug: string
  price: number
  title: string
  description: string
  images: ImageProps[]
}
