import { type SchemaTypeDefinition } from 'sanity'
import { videos } from './pageBlocks/videos'
import { video } from './doctypes/video'
import { river } from './pageBlocks/river'
import { release } from './doctypes/release'
import { products } from './pageBlocks/products'
import { product } from './doctypes/product'
import { pageBanner } from './pageBlocks/pageBanner'
import { page } from './doctypes/page'
import { otherBand } from './doctypes/otherBand'
import { merchCategory } from './doctypes/merchCategory'
import { merch } from './doctypes/merch'
import { menu } from './doctypes/menu'
import { members } from './pageBlocks/members'
import { location } from './doctypes/location'
import { homePage } from './doctypes/homePage'
import { globalInfo } from './doctypes/globalInfo'
import { gallery } from './pageBlocks/gallery'
import { form } from './pageBlocks/form'
import { events } from './pageBlocks/events'
import { event } from './doctypes/event'
import { ctaBanner } from './pageBlocks/ctaBanner'
import { bigBanner } from './pageBlocks/bigBanner'
import { articles } from './pageBlocks/articles'
import { article } from './doctypes/article'

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
  ],
}
