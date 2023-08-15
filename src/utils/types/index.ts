export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type ButtonStyle =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'primary-outline'
  | 'secondary-outline'
  | 'tertiary-outline'
  | 'quaternary-outline'
export type HeadingSize = 'large' | 'medium' | 'small'
export type LinkTypes = 'social' | 'url'

export interface AssetProps {
  _ref: string
  _type: string
}

export interface ImageProps {
  asset: AssetProps
  lqip: string
}

export interface LinkProps {
  _key: string
  linkType: LinkTypes
  text: string
  url: string
}

export interface PageBlockProps {
  _type: string
  _key: string
}
