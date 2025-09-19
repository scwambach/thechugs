import { imageQuery, slugQuery } from './queryParts'

export const product = `
_id,
title,
merchBooth,
${slugQuery},
tags,
externalId,
localOnly,
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
defined(outOfStockMsg) => { outOfStockMsg },
defined(variants) => { "price": variants[0].price},
defined(variants) => { variants[] {
  "_id": _key,
  externalId,
  price,
  image,
  title
}}
`
