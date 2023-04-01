// @ts-nocheck
import {deskTool} from 'sanity/desk'
import {
  AiFillCompass,
  AiOutlineAlert,
  AiOutlineStar,
  AiOutlineProject,
  AiOutlineUser,
  AiOutlineForm,
} from '@meronex/icons/ai'
import {BsGear, BsBuilding, BsFillChatQuoteFill, BsCardText} from '@meronex/icons/bs'
import FdPageCopy from '@meronex/icons/fd/FdPageCopy'
import BisMap from '@meronex/icons/bi/BisMap'
import EnDocuments from '@meronex/icons/en/EnDocuments'
import OiImage from '@meronex/icons/oi/OiImage'
import GrResources from '@meronex/icons/gr/GrResources'
import MdLocalMovies from '@meronex/icons/md/MdLocalMovies'
import MdcMovieOpenOutline from '@meronex/icons/mdc/MdcMovieOpenOutline'
import EnGlobe from '@meronex/icons/en/EnGlobe'
import MdEvent from '@meronex/icons/md/MdEvent'

export const desk = deskTool({
  structure: (S) =>
    S.list()
      .title('Base')
      .items([
        S.listItem().title('Events').child(S.documentTypeList('event').title('Events')),
        S.listItem()
          .title('Global Info')
          .child(S.document().schemaType('globalInfo').documentId('globalInfo')),
      ]),
})
