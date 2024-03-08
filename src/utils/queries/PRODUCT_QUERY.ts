import { globalInfoQuery, mainNavQuery } from './queryParts'

export const PRODUCT_QUERY = `*[_type == 'merch' && slug.current == $slug][0]{
  "page": {
    title,
    _id,
    slug,
    externalId,
    productId,
    thumbnail,
    variants,
    "category": category -> {
      _id,
      title,
      slug,
    }
  },
  ${mainNavQuery},
  ${globalInfoQuery}
}`
