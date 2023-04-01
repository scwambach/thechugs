import {blockContent} from './common/blockContent'

export const event = {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'dateTime',
      title: 'Date and Time',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'doorTime',
      title: 'Door Time',
      type: 'string',
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    blockContent({title: 'Description', name: 'description'}),
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'link',
          fields: [
            {
              name: 'copy',
              type: 'string',
              title: 'Copy',
            },
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
