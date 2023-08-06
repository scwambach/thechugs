import {defineType} from 'sanity'
import {blockFields} from '../common/blockFields'

export const members = defineType({
  name: 'members',
  title: 'Members',
  type: 'object',
  fields: [...blockFields],
})
