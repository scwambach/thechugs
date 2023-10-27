import { bigBanner } from './blockQueries/bigBanner'
import { members } from './blockQueries/members'
import { products } from './blockQueries/products'
import { river } from './blockQueries/river'

export const HOME_QUERY = `*[_type == 'page' && title == 'Home'][0]{
  title,
  description,
  pageImage {
    ...,
    "lqip": asset -> metadata.lqip
  },
  pageBlocks[] {
    _type,
    _key,
    ${bigBanner},
    ${river},
    ${products},
    ${members}
  }
}`
