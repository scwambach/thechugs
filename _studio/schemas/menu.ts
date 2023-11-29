import {AiOutlineLink} from 'react-icons/ai'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const menu = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Item',
          type: 'object',
          icon: AiOutlineLink,
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
            },
            prepare({title, subtitle}) {
              return {
                title,
                subtitle,
              }
            },
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subItems',
              title: 'Sub items',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'subItem',
                  title: 'Sub item',
                  type: 'object',
                  icon: AiOutlineLink,
                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'url',
                    },
                    prepare({title, subtitle}) {
                      return {
                        title,
                        subtitle,
                      }
                    },
                  },
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
