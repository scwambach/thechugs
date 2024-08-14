import { product } from './productQuery'
import { globalInfoQuery, mainNavQuery } from './queryParts'

export const GARAGE_SALE_QUERY = `{
  "items": *[_type == 'merch' && category->title == 'Garage Sale'] | order(title asc) {
    ${product}
  },
  ${mainNavQuery},
  ${globalInfoQuery}
}`
