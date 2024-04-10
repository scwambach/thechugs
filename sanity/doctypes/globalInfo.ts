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
  ],
}
