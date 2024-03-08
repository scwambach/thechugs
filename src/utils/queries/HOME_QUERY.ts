import { pageBlocks } from './pageBlocks'
import { globalInfoQuery, mainNavQuery } from './queryParts'

export const HOME_QUERY = `*[_type == 'page' && title == 'Home'][0]{
  title,
  description,
  pageImage {
    ...,
    "lqip": asset -> metadata.lqip
  },
  pageBlocks[] {
    ${pageBlocks}
  },
  ${mainNavQuery},
  ${globalInfoQuery}
}`
