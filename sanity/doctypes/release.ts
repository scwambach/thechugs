export const release = {
  name: 'release',
  title: 'Release',
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
      title: 'Release Date',
      name: 'releaseDate',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Cover Art',
      name: 'coverArt',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [{type: 'product'}],
    },
    {
      title: 'Pre-Save Link',
      name: 'preSaveLink',
      type: 'object',
      fields: [
        {
          title: 'Copy',
          name: 'copy',
          type: 'string',
        },
        {
          title: 'URL',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'object',
          fields: [
            {
              title: 'Copy',
              name: 'copy',
              type: 'string',
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}
