import {defineArrayMember, defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Please click the Generate button to create a slug. Do not edit this field manually. If you do, you will break the link to this page.',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description:
        'This is used for SEO purposes, and will appear in search results. It should be a short sentence or two.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pageImage',
      title: 'Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'pageBlocks',
      title: 'Page Blocks',
      type: 'array',
      of: [
        defineArrayMember({name: 'articles', type: 'articles'}),
        defineArrayMember({name: 'ctaBanner', type: 'ctaBanner'}),
        defineArrayMember({name: 'events', type: 'events'}),
        defineArrayMember({name: 'form', type: 'form'}),
        defineArrayMember({name: 'gallery', type: 'gallery'}),
        defineArrayMember({name: 'members', type: 'members'}),
        defineArrayMember({name: 'posts', type: 'posts'}),
        defineArrayMember({name: 'products', type: 'products'}),
        defineArrayMember({name: 'river', type: 'river'}),
        defineArrayMember({name: 'videos', type: 'videos'}),
      ],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
