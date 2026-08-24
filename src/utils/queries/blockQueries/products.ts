import { product } from '../productQuery'
import { commonProps } from '../queryParts'

// Sort by the rank the orderable list pane writes, so the category lists below
// keep the order set in the studio. Merch synced in from Printful has no rank
// yet; coalescing to '' sorts it above every ranked item, and title is the
// tiebreaker so unranked merch still has a stable order.
const merchOrder = `order(coalesce(orderRank, '') asc, title asc)`

export const products = `_type == 'products' => {
  ${commonProps},
  allProducts,
  products[] -> {
    ${product}
  },
  defined(allProducts) => {
    "products": {
      "clothing": *[_type == 'merch' && category->title == 'Clothing'] | ${merchOrder} {
        ${product}
      },
      "music": *[_type == 'merch' && category->title == 'Music'] | ${merchOrder} {
        ${product}
      },
      "stickers": *[_type == 'merch' && category->title == 'Stickers'] | ${merchOrder} {
        ${product}
      },
      "accessories": *[_type == 'merch' && category->title == 'Accessories'] | ${merchOrder} {
        ${product}
      },
    },
  },
}`
