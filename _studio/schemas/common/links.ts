import {defineArrayMember, defineField} from 'sanity'
import {AiOutlineLink} from 'react-icons/ai'
export const links = [
  defineField({
    name: 'links',
    title: 'Links',
    type: 'array',
    of: [
      defineArrayMember({
        name: 'link',
        title: 'Link',
        type: 'object',
        icon: AiOutlineLink,
        fields: [
          defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
            hidden: ({parent}: any) => parent?.linkType === 'social',
          }),
          defineField({
            name: 'linkType',
            title: 'Link type',
            type: 'string',
            initialValue: 'url',
            options: {
              list: [
                {title: 'social', value: 'social'},
                {title: 'url', value: 'url'},
              ],
            },
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
    ],
  }),
]
