export const globalInfo = {
  name: 'globalInfo',
  title: 'Global Info',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 4,
    },
    {
      name: 'siteImage',
      title: 'Site Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      fields: [
        {
          name: 'email',
          type: 'string',
          title: 'Email',
        },
        {
          name: 'socials',
          title: 'Socials',
          type: 'array',
          of: [
            {
              name: 'url',
              type: 'url',
              title: 'URL',
            },
          ],
        },
      ],
    },
  ],
}
