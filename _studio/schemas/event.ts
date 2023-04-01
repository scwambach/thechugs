export const event = {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Date and Time',
      name: 'dateTime',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Door Time',
      name: 'doorTime',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: 'object',
          name: 'link',
          fields: [
            {
              name: 'copy',
              type: 'string',
              title: 'Copy',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
