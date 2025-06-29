import { ImageProps } from 'next/image'

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
  minimal?: boolean
  tags?: string[]
  localOnly?: boolean
  category: {
    _id: string
    title: string
    slug: string
  }
  images?: { image: ImageProps }[]
  thumbnail?: string
  slug?: string
  price: number
  outOfStockMsg?: string
  title: string
  variants?: {
    _id: string
    externalId: string
    price: number
    image: string
    title: string
  }[]
}
