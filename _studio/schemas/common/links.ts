import {defineArrayMember, defineField} from 'sanity'
import {AiOutlineLink} from 'react-icons/ai'
import {buttonStyles} from './buttonStyles'
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
            name: 'buttonStyle',
            title: 'Button style',
            type: 'string',
            hidden: ({parent}: any) => parent?.linkType === 'social',
            description:
              'Only applies to links of type "url" and only if the link is in a button group.',
            options: {
              list: buttonStyles,
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
