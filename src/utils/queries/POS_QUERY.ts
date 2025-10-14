import { product } from './productQuery'
import { globalInfoQuery, mainNavQuery } from './queryParts'

export const POS_QUERY = `{
  "items": *[_type == 'merch' && merchBooth == true] | order(title asc) {
    ${product}
  },
  ${mainNavQuery},
  ${globalInfoQuery}
}`
