import { type SchemaTypeDefinition } from 'sanity'
import { articles } from './pageBlocks/articles'
import { bigBanner } from './pageBlocks/bigBanner'
import { ctaBanner } from './pageBlocks/ctaBanner'
import { events } from './pageBlocks/events'
import { form } from './pageBlocks/form'
import { gallery } from './pageBlocks/gallery'
import { members } from './pageBlocks/members'
import { pageBanner } from './pageBlocks/pageBanner'
import { products } from './pageBlocks/products'
import { river } from './pageBlocks/river'
import { videos } from './pageBlocks/videos'

import { article } from './doctypes/article'
import { event } from './doctypes/event'
import { globalInfo } from './doctypes/globalInfo'
import { homePage } from './doctypes/homePage'
import { location } from './doctypes/location'
import { menu } from './doctypes/menu'
import { merch } from './doctypes/merch'
import { merchCategory } from './doctypes/merchCategory'
import { otherBand } from './doctypes/otherBand'
import { page } from './doctypes/page'
import { product } from './doctypes/product'
import { release } from './doctypes/release'
import { video } from './doctypes/video'
import { garageSaleItem } from './doctypes/garageSaleItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    articles,
    bigBanner,
    ctaBanner,
    event,
    events,
    form,
    gallery,
    globalInfo,
    homePage,
    location,
    members,
    menu,
    merch,
    merchCategory,
    otherBand,
    page,
    pageBanner,
    product,
    products,
    release,
    river,
    video,
    videos,
    garageSaleItem,
  ],
}
