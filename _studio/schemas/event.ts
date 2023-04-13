import {FaLink} from 'react-icons/fa'

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
      options: {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'hh:mmA',
      },
    },
    {
      title: 'Door Time',
      name: 'doorTime',
      type: 'datetime',
      options: {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'hh:mmA',
      },
      description:
        "The date doesn't matter, just the time. However, it'd be nice if it was the same day as the event. So... ya know... just do that.",
    },
    {
      title: 'Location',
      name: 'location',
      type: 'reference',
      validation: (Rule: any) => Rule.required(),
      to: [{type: 'location'}],
    },
    {
      title: 'Other Bands',
      name: 'otherBands',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'otherBand'}]}],
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
          icon: FaLink,
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
