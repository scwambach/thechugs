import { ImageProps } from '..'

export interface VariantProps {
  _id: string
  externalId: string
  price: number
  image: string
  title: string
}

export interface ProductCardProps {
  _id: string
  externalId?: string
  description?: string
  tags: string[]
  images?: { image: ImageProps }[]
  thumbnail?: string
  slug?: string
  price: number
  title: string
  variants?: {
    _id: string
    externalId: string
    price: number
    image: string
    title: string
  }[]
}
