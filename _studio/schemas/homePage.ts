import {blockContent} from './common/blockContent'

export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      readOnly: true,
    },
    {
      title: 'Banner',
      name: 'banner',
      type: 'object',
      validation: (Rule: any) => Rule.required(),
      fields: [
        {
          title: 'Video',
          name: 'video',
          type: 'url',
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

        {
          title: 'Logo',
          name: 'logo',
          type: 'image',
          validation: (Rule: any) => Rule.required(),
        },
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      title: 'Artist Bio',
      name: 'artistBio',
      type: 'object',
      validation: (Rule: any) => Rule.required(),
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: (Rule: any) => Rule.required(),
          options: {
            hotspot: true,
          },
        },
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        blockContent({title: 'Copy', name: 'copy'}),
      ],
    },
    {
      title: 'Image Gallery',
      name: 'imageGallery',
      type: 'array',
      validation: (Rule: any) => Rule.required(),
      options: {
        layout: 'grid',
      },
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
}
