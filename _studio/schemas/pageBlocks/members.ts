import {defineType} from 'sanity'
import {blockFields} from '../common/blockFields'
import {FaUsers} from 'react-icons/fa'

export const members = defineType({
  name: 'members',
  title: 'Members',
  type: 'object',
  icon: FaUsers,
  fields: [...blockFields],
})
