import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {GrGallery} from 'react-icons/gr'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  icon: GrGallery,
  type: 'object',
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Gallery',
        subtitle: title ? 'Gallery' : undefined,
      }
    },
  },
  fields: [
    ...blockFields,
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
})
