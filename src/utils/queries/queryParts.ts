import { products } from '@utils/products'

export const imageQuery = `...,
"lqip": asset -> metadata.lqip`

export const slugQuery = `"slug": slug.current`

export const commonProps = `
  heading,
  headingLevel,
  subheading,
  backgroundColor
`

export const mainNavQuery = `"nav": *[_type == 'menu' && title == 'Main Nav'][0].items`
