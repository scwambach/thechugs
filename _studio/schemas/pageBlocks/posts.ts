import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {BsPencil} from 'react-icons/bs'

export const posts = defineType({
  name: 'posts',
  title: 'Posts',
  icon: BsPencil,
  type: 'object',
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Posts',
        subtitle: title ? 'Posts' : undefined,
      }
    },
  },
  fields: [
    ...blockFields,
    defineField({
      name: 'latest',
      title: 'Latest',
      type: 'boolean',
      initialValue: true,
      description: 'Just show the latest 3 posts',
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      hidden: ({parent}) => parent?.latest,
      type: 'array',
      of: [
        defineArrayMember({
          name: 'article',
          title: 'Article',
          type: 'reference',
          to: [{type: 'article'}],
        }),
      ],
    }),
  ],
})
