import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {desk} from './desk'

export default defineConfig({
  name: 'default',
  title: 'The Chugs',

  projectId: 'o0jv7xwk',
  dataset: 'production',

  plugins: [desk, visionTool()],

  schema: {
    types: schemaTypes,
  },
})
