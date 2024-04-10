import { BiAlbum } from 'react-icons/bi'
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import {
  AiFillHome,
  AiFillVideoCamera,
  AiOutlineCalendar,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { GrArticle, GrMultiple } from 'react-icons/gr'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S: any) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Home Page')
              .child(S.document().schemaType('homePage').documentId('homePage'))
              .icon(AiFillHome),
            S.listItem()
              .title('Pages')
              .child(S.documentTypeList('page').title('Pages'))
              .icon(GrMultiple),
            S.listItem()
              .title('Videos')
              .child(S.documentTypeList('video').title('Videos'))
              .icon(AiFillVideoCamera),
            S.listItem()
              .title('Events')
              .child(S.documentTypeList('event').title('Events'))
              .icon(AiOutlineCalendar),
            S.listItem()
              .title('Locations')
              .child(S.documentTypeList('location').title('Locations'))
              .icon(FaMapMarkerAlt),
            S.listItem()
              .title('Products')
              .child(S.documentTypeList('product').title('Products'))
              .icon(AiOutlineShoppingCart),
            S.listItem()
              .title('Menus')
              .child(S.documentTypeList('menu').title('Menus'))
              .icon(AiOutlineMenu),
            S.listItem()
              .title('Merch')
              .child(S.documentTypeList('merch').title('Merch'))
              .icon(AiOutlineShoppingCart),
            S.listItem()
              .title('Releases')
              .child(S.documentTypeList('release').title('Releases'))
              .icon(BiAlbum),
            S.listItem()
              .title('Articles')
              .child(S.documentTypeList('article').title('Articles'))
              .icon(GrArticle),
            S.listItem()
              .title('Global Info')
              .child(
                S.document().schemaType('globalInfo').documentId('globalInfo')
              )
              .icon(BsGlobe),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
