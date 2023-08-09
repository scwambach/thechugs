import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const products = defineType({
  name: 'products',
  title: 'Products',
  type: 'object',
  icon: AiOutlineShoppingCart,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Products',
        subtitle: title ? 'Products' : undefined,
      }
    },
  },
  fields: [
    ...blockFields,
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          name: 'product',
          title: 'Product',
          type: 'reference',
          to: [{type: 'product'}],
        }),
      ],
    }),
  ],
})
