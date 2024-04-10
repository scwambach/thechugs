import { defineField, defineType } from 'sanity'
import { blockFields } from '../common/blockFields'
import { MdEventAvailable } from 'react-icons/md'

export const events = defineType({
  name: 'events',
  title: 'Events',
  type: 'object',
  icon: MdEventAvailable,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Events',
        subtitle: title ? 'Events' : undefined,
      }
    },
  },
  fields: [
    ...blockFields,
    defineField({
      name: 'image',
      title: 'Image',
      description: 'This will display next to the listing of events.',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
