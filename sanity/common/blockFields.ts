import { defineField } from 'sanity'

export const blockFields = [
  defineField({
    name: 'heading',
    title: 'Heading',
    type: 'string',
  }),
  defineField({
    name: 'headingLevel',
    title: 'Heading Level',
    type: 'string',
    options: {
      list: [
        { title: 'H1', value: '1' },
        { title: 'H2', value: '2' },
        { title: 'H3', value: '3' },
        { title: 'H4', value: '4' },
        { title: 'H5', value: '5' },
        { title: 'H6', value: '6' },
      ],
    },
  }),
  defineField({
    name: 'subheading',
    title: 'Subheading',
    type: 'string',
  }),
  defineField({
    name: 'backgroundColor',
    title: 'Background Color',
    type: 'string',
    options: {
      list: [
        { title: 'White', value: 'white' },
        { title: 'Black', value: 'black' },
        { title: 'Blue', value: 'blue' },
      ],
    },
  }),
]
