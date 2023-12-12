import { NavItemProps } from '.'

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
  variants: VariantProps[]
  category: any
  thumbnail: string
  _id: string
  productId: number
  title: string
  externalId: string
  slug: {
    current: string
  }
}

export interface ProductPageProps {
  page: ProductProps
  nav: NavItemProps[]
}
