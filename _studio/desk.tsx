// @ts-nocheck
import {deskTool} from 'sanity/desk'

export const desk = deskTool({
  structure: (S) =>
    S.list()
      .title('Base')
      .items([
        S.listItem()
          .title('Global Info')
          .child(S.document().schemaType('globalInfo').documentId('globalInfo')),
        S.listItem().title('Videos').child(S.documentTypeList('video').title('Videos')),
        S.listItem().title('Events').child(S.documentTypeList('event').title('Events')),
        S.listItem().title('Releases').child(S.documentTypeList('release').title('Releases')),
        S.listItem()
          .title('Home Page')
          .child(S.document().schemaType('homePage').documentId('homePage')),
      ]),
})
