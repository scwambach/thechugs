import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {BsNewspaper} from 'react-icons/bs'

export const articles = defineType({
  name: 'articles',
  title: 'Articles',
  icon: BsNewspaper,
  type: 'object',
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Articles',
        subtitle: title ? 'Articles' : undefined,
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
      description: 'Just show the latest 3 articles',
    }),
    defineField({
      name: 'articles',
      title: 'Articles',
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
