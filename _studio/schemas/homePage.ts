export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
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
      title: 'Image Gallery',
      name: 'imageGallery',
      type: 'array',
      validation: (Rule: any) => Rule.required(),
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
