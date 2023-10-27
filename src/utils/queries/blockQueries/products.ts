import { product } from '../productQuery'
import { commonProps } from '../queryParts'

export const products = `_type == 'products' => {
  ${commonProps},
  products[] -> {
    ${product}
  }
}`
