export const imageQuery = `"src": asset->url,
  "height": asset -> metadata.dimensions.height,
  "width": asset -> metadata.dimensions.width,
  "blurDataURL": asset-> metadata.lqip`

export const slugQuery = `"slug": slug.current`

export const commonProps = `
  heading,
  headingLevel,
  subheading,
  backgroundColor
`

export const mainNavQuery = `"nav": *[_type == 'menu' && title == 'Main Nav'][0].items`
export const globalInfoQuery = `"globalInfo": *[_type == 'globalInfo'][0] {
  title,
  contactInfo,
  description,
  siteImage
}`
