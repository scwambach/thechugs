import { defineArrayMember, defineField } from 'sanity'
import { AiOutlineLink } from 'react-icons/ai'
import { buttonStyles } from './buttonStyles'
import * as Icon from 'react-icons/si'

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
        preview: {
          select: {
            title: 'text',
            url: 'url',
            linkType: 'linkType',
          },
          prepare({ title, url, linkType }) {
            if (linkType === 'social') {
              const getDomain = url
                .replace('http://', '')
                .replace('https://', '')
                .replace('www.', '')
                .replace('.com', '')
                .replace('.org', '')
                .replace('.net', '')
                .replace('.io', '')
                .split(/[/?#]/)[0]

              const iconName = `Si${getDomain.charAt(0).toUpperCase() + getDomain.slice(1)}`

              return {
                title: title || url,
                subtitle:
                  getDomain.charAt(0).toUpperCase() + getDomain.slice(1),
                // @ts-ignore
                media: Icon[iconName],
              }
            }

            return {
              title: title || url,
            }
          },
        },
        fields: [
          defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
            hidden: ({ parent }: any) => parent?.linkType === 'social',
          }),
          defineField({
            name: 'linkType',
            title: 'Link type',
            type: 'string',
            initialValue: 'url',
            options: {
              list: [
                { title: 'social', value: 'social' },
                { title: 'url', value: 'url' },
              ],
            },
          }),
          defineField({
            name: 'buttonStyle',
            title: 'Button style',
            type: 'string',
            hidden: ({ parent }: any) => parent?.linkType === 'social',
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
