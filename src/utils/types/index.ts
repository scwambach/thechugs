import { PortableTextBlock } from '@portabletext/types'

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

export interface ImageProps {
  _type: string
  asset: AssetProps
  crop?: {
    top: number
    left: number
    bottom: number
    _type: string
    right: number
  }
  hotspot?: {
    _type: string
    width: number
    x: number
    y: number
    height: number
  }
  lqip: string
}

export interface LinkProps {
  _key: string
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
