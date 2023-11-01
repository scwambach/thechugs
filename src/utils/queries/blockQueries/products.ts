import { product } from '../productQuery'
import { commonProps } from '../queryParts'

export const products = `_type == 'products' => {
  ${commonProps},
  allProducts,
  products[] -> {
    ${product}
  },
  defined(allProducts) => {
    "products": *[_type == 'merch'] | order(title asc) | order(category->title asc) {
      ${product}
    }
  },
}`
