import { GrArticle } from 'react-icons/gr'

export const article = {
  title: 'Article',
  name: 'article',
  type: 'document',
  icon: GrArticle,
  fields: [
    {
      title: 'Title',
      name: 'title',
      validation: (Rule: any) => Rule.required(),
      type: 'string',
    },
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
      title: 'Date',
      name: 'date',
      validation: (Rule: any) => Rule.required(),
      type: 'date',
    },
    {
      title: 'Description',
      name: 'description',
      validation: (Rule: any) => Rule.required(),
      type: 'text',
      rows: 3,
    },
    {
      title: 'Link',
      name: 'link',
      validation: (Rule: any) => Rule.required(),
      type: 'url',
    },
  ],
}
