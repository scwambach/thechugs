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
  AiFillVideoCamera,
  AiOutlineCalendar,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { PiGarageBold } from 'react-icons/pi'
import { GrArticle, GrMultiple } from 'react-icons/gr'
import { FaCogs, FaMapMarkerAlt } from 'react-icons/fa'
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
              .title('Pages')
              .child(S.documentTypeList('page').title('Pages'))
              .icon(GrMultiple),
            S.listItem()
              .title('Events')
              .child(
                S.list()
                  .title('Events')
                  .items([
                    S.listItem()
                      .title('Upcoming Events')
                      .child(
                        S.documentTypeList('event')
                          .title('Events')
                          .filter(
                            '_type == "event" && dateTime >= now() && !(_id in path("drafts.**"))'
                          )
                          .defaultOrdering([
                            { field: 'dateTime', direction: 'asc' },
                          ])
                      )
                      .icon(AiOutlineCalendar),
                    S.listItem()
                      .title('Past Events')
                      .child(
                        S.documentTypeList('event')
                          .title('Events')
                          .filter(
                            '_type == "event" && dateTime < now() && !(_id in path("drafts.**"))'
                          )
                          .defaultOrdering([
                            { field: 'dateTime', direction: 'desc' },
                          ])
                      )
                      .icon(AiOutlineCalendar),
                    S.listItem()
                      .title('All Events')
                      .child(
                        S.documentTypeList('event')
                          .title('Events')
                          .defaultOrdering([
                            { field: 'dateTime', direction: 'desc' },
                          ])
                      )
                      .icon(AiOutlineCalendar),

                    S.listItem()
                      .title('Locations')
                      .child(S.documentTypeList('location').title('Locations'))
                      .icon(FaMapMarkerAlt),
                  ])
              )
              .icon(AiOutlineCalendar),
            S.listItem()
              .title('Videos')
              .child(S.documentTypeList('video').title('Videos'))
              .icon(AiFillVideoCamera),
            S.listItem()
              .title('Merch')
              .child(
                S.list()
                  .title('Merch')
                  .items([
                    S.listItem()
                      .title('Chug Merch')
                      .child(
                        S.documentTypeList('merch')
                          .title('Merch')
                          .filter(
                            "_type == 'merch' && !references('1b10042f-e887-40cf-a102-77e48b31e58b')"
                          )
                      )
                      .icon(AiOutlineShoppingCart),
                    S.listItem()
                      .title('Garage Sale')
                      .child(
                        S.documentTypeList('merch')
                          .title('Merch')
                          .filter(
                            "_type == 'merch' && references('1b10042f-e887-40cf-a102-77e48b31e58b')"
                          )
                      )
                      .icon(PiGarageBold),
                    S.listItem()
                      .title('Merch Categories')
                      .child(
                        S.documentTypeList('merchCategory').title('Categories')
                      ),
                  ])
              )
              .icon(AiOutlineShoppingCart),

            S.listItem()
              .title('Articles')
              .child(S.documentTypeList('article').title('Articles'))
              .icon(GrArticle),
            S.listItem()
              .title('Site Wide')
              .child(
                S.list()
                  .title('Site Wide')
                  .items([
                    S.listItem()
                      .title('Site Settings')
                      .child(
                        S.document()
                          .schemaType('globalInfo')
                          .documentId('globalInfo')
                      )
                      .icon(FaCogs),

                    S.listItem()
                      .title('Menus')
                      .child(S.documentTypeList('menu').title('Menus'))
                      .icon(AiOutlineMenu),
                  ])
              )
              .icon(BsGlobe),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
