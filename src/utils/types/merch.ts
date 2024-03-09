import { GlobalInfoProps, ImageProps, NavItemProps } from '.'
import { ProductCardProps } from './modules/ProductCardProps'

export interface VariantProps {
  price: number
  syncProductId: number
  image: string
  externalId: string
  _key: string
  sku: string
  title: string
  itemId: number
  variantId: number
}

export interface ProductProps {
  _id: string
  category: any
  description?: string
  externalId: string
  price?: number
  images?: {
    image: ImageProps
  }[]
  productId?: number
  slug: {
    current: string
  }
  thumbnail?: string
  title: string
  variants?: VariantProps[]
}

export interface ProductPageProps {
  page: ProductProps
  nav: NavItemProps[]
  globalInfo: GlobalInfoProps
}
