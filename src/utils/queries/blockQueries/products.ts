import { product } from '../productQuery'
import { commonProps } from '../queryParts'

export const products = `_type == 'products' => {
  ${commonProps},
  allProducts,
  products[] -> {
    ${product}
  },
  defined(allProducts) => {
    "products": {
      "clothing": *[_type == 'merch' && category->title == 'Clothing'] | order(title asc) {
        ${product}
      },
      "music": *[_type == 'merch' && category->title == 'Music'] | order(title asc) {
        ${product}
      },
      "stickers": *[_type == 'merch' && category->title == 'Stickers'] | order(title asc) {
        ${product}
      },
      "accessories": *[_type == 'merch' && category->title == 'Accessories'] | order(title asc) {
        ${product}
      },
    },
  },
}`
