import { bigBanner } from './blockQueries/bigBanner'

export const imageQuery = `...,
"lqip": asset -> metadata.lqip`

export const slugQuery = `"slug": slug.current`

export const commonProps = `
  heading,
  headingLevel,
  subheading,
  backgroundColor
`
