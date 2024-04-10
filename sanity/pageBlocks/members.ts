import {defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {FaUsers} from 'react-icons/fa'

export const members = defineType({
  name: 'members',
  title: 'Members',
  type: 'object',
  icon: FaUsers,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Members',
        subtitle: title ? 'Members' : undefined,
      }
    },
  },
  fields: [...blockFields],
})
