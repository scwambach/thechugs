import { stylesMarks } from '../common/stylesMarks'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { links } from '../common/links'
import { BsFillImageFill } from 'react-icons/bs'

export const pageBanner = defineType({
  name: 'pageBanner',
  title: 'Page Banner',
  type: 'object',
  icon: BsFillImageFill,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Page Banner',
        subtitle: title ? 'Page Banner' : undefined,
      }
    },
  },
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          ...stylesMarks,
        }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    ...links,
  ],
})
