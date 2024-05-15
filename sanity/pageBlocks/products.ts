import { defineArrayMember, defineField, defineType } from 'sanity'
import { blockFields } from '../common/blockFields'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const products = defineType({
  name: 'products',
  title: 'Products',
  type: 'object',
  icon: AiOutlineShoppingCart,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Products',
        subtitle: title ? 'Products' : undefined,
      }
    },
  },
  fields: [
    ...blockFields,
    defineField({
      name: 'allProducts',
      title: 'All Products',
      type: 'boolean',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      hidden: ({ parent }) => parent?.allProducts,
      of: [
        defineArrayMember({
          name: 'product',
          title: 'Product',
          type: 'reference',
          to: [{ type: 'merch' }],
        }),
      ],
    }),
  ],
})
