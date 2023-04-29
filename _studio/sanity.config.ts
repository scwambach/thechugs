import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {desk} from './desk'
import {codeInput} from '@sanity/code-input'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'The Chugs',

  projectId: 'o0jv7xwk',
  dataset: 'production',

  plugins: [desk, visionTool(), codeInput(), media()],

  schema: {
    types: schemaTypes,
  },
})
