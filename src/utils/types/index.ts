import { PortableTextBlock } from '@portabletext/types'
import { ImageProps } from 'next/image'

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6'
export type BackgroundColor = 'white' | 'black' | 'blue'
export type ButtonStyle =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'primary-outline'
  | 'secondary-outline'
  | 'tertiary-outline'
  | 'quaternary-outline'
  | 'black'
  | 'black-outline'
  | 'white'
  | 'white-outline'
export type HeadingSize = 'large' | 'medium' | 'small'
export type LinkTypes = 'social' | 'url'
export type InputTypes =
  | 'text'
  | 'email'
  | 'tel'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'hidden'
  | 'number'
  | 'month'
  | 'time'
  | 'url'
  | 'week'
  | 'date'
  | 'datetime-local'
  | 'file'
  | 'image'
  | 'color'
  | 'range'
  | 'search'
  | 'submit'
  | 'reset'
  | 'button'

export interface AssetProps {
  _ref: string
  _type: string
}

export interface LinkProps {
  _key: string
  _type?: string
  buttonStyle?: ButtonStyle
  linkType?: LinkTypes
  text?: string
  copy?: string
  url: string
}

export interface SectionHeadingProps {
  copy?: PortableTextBlock[]
  heading?: string
  headingLevel?: HeadingLevel
  subheading?: string
  backgroundColor?: BackgroundColor
}

export interface PageBlockProps extends SectionHeadingProps {
  _type: string
  _key: string
}

export interface ProductProps {
  _type: string
  productId: number
  externalId: string
  title: string
  thumbnail: string
  slug: {
    current: string
  }
  variants: {
    title: string
    itemId: string
    variantId: number
    sku: string
    externalId: string
    syncProductId: number
    image: string
    price: number
  }[]
}

export interface ProductDataProps {
  sync_product: {
    external_id: string
    id: number
    is_ignored: boolean
    name: string
    synced: number
    thumbnail_url: string
    variants: number
  }
  sync_variants: {
    availability_status: string
    color: string
    currency: string
    external_id: string
    files: {
      id: number
      type: string
      hash: string
      url?: string
      filename: string
      mime_type: string
      size: number
      width: number
      height: number
      dpi?: string
      status: string
      created: number
      thumbnail_url: string
      preview_url: string
      visible: boolean
      is_temporary: boolean
    }[]
    id: number
    is_ignored: boolean
    main_category_id: number
    name: string
    options: {
      id: string
      value: any
    }[]
    product: {
      variant_id: number
      product_id: number
      image: string
      name: string
    }
    retail_price: string
    size: string
    sku: string
    sync_product_id: number
    synced: boolean
    variant_id: number
    warehouse_product_variant_id: string
  }[]
}

export interface NavItemProps {
  _key: string
  title: string
  url: string
  subItems?: NavItemProps[]
}

export interface GlobalInfoProps {
  title?: string
  description?: string
  contactInfo?: {
    socials?: string[]
    email?: string
  }
  siteImage?: ImageProps
}
