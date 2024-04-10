import { FaStar } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'

export const merchCategory = defineType({
  name: 'merchCategory',
  title: 'Merch Category',
  type: 'document',
  icon: FaStar,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Please click the Generate button to create a slug. Do not edit this field manually. If you do, you will break the link to this page.',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
