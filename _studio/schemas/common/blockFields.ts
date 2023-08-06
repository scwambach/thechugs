import {defineField} from 'sanity'

export const blockFields = [
  defineField({
    name: 'heading',
    title: 'Heading',
    type: 'string',
  }),
  defineField({
    name: 'subheading',
    title: 'Subheading',
    type: 'string',
  }),
]
