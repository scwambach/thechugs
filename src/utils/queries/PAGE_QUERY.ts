import { pageBlocks } from './pageBlocks'
import { globalInfoQuery, mainNavQuery } from './queryParts'

export const PAGE_QUERY = `*[_type == 'page' && slug.current == $slug][0]{
  title,
  description,
  "slug": slug.current,
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
