// TODO: Add a preview

export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'images',
    },
    prepare({title, media}: any) {
      console.log({media: media[0]})
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
