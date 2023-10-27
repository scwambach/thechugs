import { imageQuery, slugQuery } from './queryParts'

export const productsQuery = `*[_type == 'merch'] | order(title asc) | order(category->title asc) {
  _id,
  title,
  ${slugQuery},
  tags,
  externalId,
  category -> {
    _id,
    title,
    ${slugQuery},
  },
  defined(images) => { "images": images[] {
    image {
      ${imageQuery}
    }
  }},
  defined(thumbnail) => { thumbnail },
  defined(price) => { price },
  defined(variants) => { "price": variants[0].price},
  defined(variants) => { variants[] {
    "_id": _key,
    externalId,
    price,
    image,
    title
  }}
}`
