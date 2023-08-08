import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const featuredProducts = defineType({
  name: 'featuredProducts',
  title: 'Featured Products',
  type: 'object',
  icon: AiOutlineShoppingCart,
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
