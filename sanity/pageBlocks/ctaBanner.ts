import {stylesMarks} from '../common/stylesMarks'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {links} from '../common/links'
import {PiFlagBannerBold} from 'react-icons/pi'

export const ctaBanner = defineType({
  name: 'ctaBanner',
  title: 'CTA Banner',
  type: 'object',
  icon: PiFlagBannerBold,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'CTA Banner',
        subtitle: title ? 'CTA Banner' : undefined,
      }
    },
  },
  fields: [
    ...blockFields,
    defineField({
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          ...stylesMarks,
        }),
      ],
    }),
    defineField({
      name: 'contained',
      title: 'Contained',
      type: 'boolean',
    }),
    defineField({
      name: 'foregroundImage',
      title: 'Foreground Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    ...links,
  ],
})
