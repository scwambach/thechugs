import { globalInfoQuery, imageQuery, mainNavQuery } from './queryParts'

export const PRODUCT_QUERY = `*[_type == 'merch' && slug.current == $slug][0]{
  "page": {
    title,
    _id,
    slug,
    description,
    externalId,
    productId,
    thumbnail,
    variants,
    price,
    images[] {
      image {
        ${imageQuery}
      }
    },
    "category": category -> {
      _id,
      title,
      slug,
    }
  },
  ${mainNavQuery},
  ${globalInfoQuery}
}`
