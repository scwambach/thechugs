import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {AiOutlineVideoCamera} from 'react-icons/ai'

export const videos = defineType({
  name: 'videos',
  title: 'Videos',
  icon: AiOutlineVideoCamera,
  type: 'object',
  fields: [
    ...blockFields,
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
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
