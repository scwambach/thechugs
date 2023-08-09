import {defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {MdEventAvailable} from 'react-icons/md'

export const events = defineType({
  name: 'events',
  title: 'Events',
  type: 'object',
  icon: MdEventAvailable,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Events',
        subtitle: title ? 'Events' : undefined,
      }
    },
  },
  fields: [...blockFields],
})
