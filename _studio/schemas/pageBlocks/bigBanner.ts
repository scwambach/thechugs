import {BsFillImageFill} from 'react-icons/bs'
import {defineType} from 'sanity'
export const bigBanner = defineType({
  name: 'bigBanner',
  title: 'Big Banner',
  type: 'object',
  icon: BsFillImageFill,
  preview: {
    select: {
      title: 'screenReaderText',
    },
    prepare({title}) {
      return {
        title: title || 'Big Banner',
        subtitle: title ? 'Big Banner' : undefined,
      }
    },
  },
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      validation: (Rule) => Rule.required(),
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      validation: (Rule) => Rule.required(),
      type: 'image',
    },
    {
      name: 'screenReaderText',
      title: 'Screen Reader Text',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
  ],
})
