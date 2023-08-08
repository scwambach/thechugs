// TODO: Add a preview

export const product = {
  name: 'product',
  title: 'Product',
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
