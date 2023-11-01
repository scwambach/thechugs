import { pageBlocks } from './pageBlocks'

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
  }
}`
