import { defineField, defineType } from 'sanity'
import { PiGarageBold } from 'react-icons/pi'
import { blockContent } from '../common/blockContent'

export const garageSaleItem = defineType({
  name: 'garageSaleItem',
  title: 'Garage Sale Item',
  type: 'document',
  icon: PiGarageBold,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    blockContent({ title: 'Description', name: 'description' }) as any,
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
