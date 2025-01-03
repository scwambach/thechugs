export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'images',
    },
    prepare({ title, media }: any) {
      return {
        title,
        media: media[0],
      }
    },
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: 'image',
          title: 'Image',
          name: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
}
