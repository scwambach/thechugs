import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
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
