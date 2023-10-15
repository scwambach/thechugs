// @ts-nocheck
import {deskTool} from 'sanity/desk'
import {
  AiFillHome,
  AiFillVideoCamera,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {GrMultiple} from 'react-icons/gr'
import {BiAlbum} from 'react-icons/bi'
import {BsGlobe} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {GrArticle} from 'react-icons/gr'
export const desk = deskTool({
  structure: (S) =>
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
        S.listItem().title('Posts').child(S.documentTypeList('post').title('Posts')).icon(FiEdit),
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
          .child(S.document().schemaType('globalInfo').documentId('globalInfo'))
          .icon(BsGlobe),
      ]),
})
