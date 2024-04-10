import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {AiOutlineVideoCamera} from 'react-icons/ai'

export const videos = defineType({
  name: 'videos',
  title: 'Videos',
  icon: AiOutlineVideoCamera,
  type: 'object',
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Videos',
        subtitle: title ? 'Videos' : undefined,
      }
    },
  },
  fields: [
    ...blockFields,
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (Rule: any) => Rule.required(),
      of: [
        defineArrayMember({
          name: 'video',
          title: 'Video',
          type: 'reference',
          to: [{type: 'video'}],
        }),
      ],
    }),
  ],
})
