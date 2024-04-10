import { defineField, defineType } from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      title: 'Video',
      name: 'video',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
