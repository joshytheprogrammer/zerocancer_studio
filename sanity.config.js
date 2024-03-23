import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'

const SANITY_STUDIO_PREVIEW_URL = (
	process.env.SANITY_STUDIO_PREVIEW_URL // Dont forget to set this in netlify
	|| 'http://localhost:3000'
)

export default defineConfig({
  name: 'default',
  title: 'Zerocancer',

  projectId: 'ftcg31zr',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      title: 'Zerocancer Presentation Tool',
      name: 'zerocancer'
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  
})
