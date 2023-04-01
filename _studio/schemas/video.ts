export const video = {
  name: 'video',
  title: 'Video',
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
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
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
  ],
}
