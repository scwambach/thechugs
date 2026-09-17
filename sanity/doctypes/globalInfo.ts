import { AiOutlineLink } from 'react-icons/ai'
import { links } from '../common/links'

export const globalInfo = {
  title: 'Global Info',
  name: 'globalInfo',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Site Image',
      name: 'siteImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Contact Info',
      name: 'contactInfo',
      type: 'object',
      validation: (Rule: any) => Rule.required(),
      fields: [
        {
          title: 'Email',
          name: 'email',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          title: 'Socials',
          name: 'socials',
          type: 'array',
          validation: (Rule: any) => Rule.required(),
          of: [
            {
              title: 'URL',
              name: 'url',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      title: 'Members',
      name: 'members',
      type: 'array',
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          title: 'Member',
          name: 'member',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              title: 'Role',
              name: 'role',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule: any) => Rule.required(),
            },
            ...links,
          ],
        },
      ],
    },
    {
      title: 'Affiliated Footer Links',
      name: 'affiliatedFooterLinks',
      description:
        'Links to friends and affiliated sites. Each group renders as its own list in the footer.',
      type: 'array',
      of: [
        {
          title: 'Link Group',
          name: 'linkGroup',
          type: 'object',
          icon: AiOutlineLink,
          preview: {
            select: {
              heading: 'heading',
              links: 'links',
            },
            prepare({ heading, links: groupLinks }: any) {
              const count = groupLinks?.length ?? 0

              return {
                title: heading || 'Untitled group',
                subtitle: `${count} link${count === 1 ? '' : 's'}`,
              }
            },
          },
          fields: [
            {
              title: 'Heading',
              name: 'heading',
              description: 'Optional. Only shown in the footer when filled in.',
              type: 'string',
            },
            {
              title: 'Links',
              name: 'links',
              type: 'array',
              validation: (Rule: any) => Rule.min(1),
              of: [
                {
                  title: 'Link',
                  name: 'affiliatedLink',
                  type: 'object',
                  preview: {
                    select: {
                      title: 'text',
                      subtitle: 'url',
                    },
                  },
                  fields: [
                    {
                      title: 'Text',
                      name: 'text',
                      type: 'string',
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      title: 'URL',
                      name: 'url',
                      type: 'url',
                      validation: (Rule: any) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Buy Us A Beer',
      name: 'beerFund',
      description:
        'Tip jar items. Prices left blank fall back to the code defaults.',
      type: 'object',
      fields: [
        {
          title: 'Enabled',
          name: 'enabled',
          description:
            'Shows the Buy Us A Beer buttons in the header and inside the cart.',
          type: 'boolean',
          initialValue: true,
        },
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
          initialValue: 'Buy Us A Beer',
        },
        {
          title: 'Single Label',
          name: 'singleLabel',
          type: 'string',
        },
        {
          title: 'Single Price',
          name: 'singlePrice',
          type: 'number',
          validation: (Rule: any) => Rule.min(0),
        },
        {
          title: '30 Pack Label',
          name: 'thirtyPackLabel',
          type: 'string',
        },
        {
          title: '30 Pack Price',
          name: 'thirtyPackPrice',
          type: 'number',
          validation: (Rule: any) => Rule.min(0),
        },
        {
          title: 'Image',
          name: 'image',
          description: 'Optional. Used as the cart line item thumbnail.',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
