import {defineArrayMember, defineField, defineType} from 'sanity'
import {stylesMarks} from '../common/stylesMarks'

export const river = defineType({
  name: 'river',
  title: 'River',
  type: 'object',
  preview: {
    select: {
      title: 'items[0].heading',
      media: 'items[0].image',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'River',
        media,
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
            defineField({
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule) =>
                    Rule.uri({
                      allowRelative: true,
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                }),
              ],
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
          ],
        }),
      ],
    }),
  ],
})
