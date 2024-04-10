import { defineArrayMember, defineField, defineType } from 'sanity'
import { stylesMarks } from '../common/stylesMarks'
import { PiWavesBold } from 'react-icons/pi'
import { links } from '../common/links'

export const river = defineType({
  name: 'river',
  title: 'River',
  icon: PiWavesBold,
  type: 'object',
  preview: {
    select: {
      title: 'items[0].heading',
    },
    prepare({ title }) {
      return {
        title: title || 'River',
        subtitle: title ? 'River' : undefined,
      }
    },
  },
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      validation: (Rule: any) => Rule.required(),
      type: 'array',
      of: [
        defineArrayMember({
          name: 'item',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            }),
            defineField({
              name: 'image',
              validation: (Rule: any) => Rule.required(),
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'fitImage',
              title: 'Fit Image',
              type: 'boolean',
              description: 'Fit image to container',
              initialValue: false,
            }),
            defineField({
              name: 'copy',
              title: 'Copy',
              validation: (Rule: any) => Rule.required(),
              type: 'array',
              of: [
                defineArrayMember({
                  title: 'Block',
                  type: 'block',
                  ...stylesMarks,
                }),
              ],
            }),
            ...links,
          ],
        }),
      ],
    }),
  ],
})
