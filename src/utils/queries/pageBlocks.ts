import { articles } from './blockQueries/articles'
import { bigBanner } from './blockQueries/bigBanner'
import { ctaBanner } from './blockQueries/ctaBanner'
import { events } from './blockQueries/events'
import { form } from './blockQueries/form'
import { gallery } from './blockQueries/gallery'
import { members } from './blockQueries/members'
import { pageBanner } from './blockQueries/pageBanner'
import { products } from './blockQueries/products'
import { river } from './blockQueries/river'
import { videos } from './blockQueries/videos'

export const pageBlocks = `
_type,
_key,
${articles},
${bigBanner},
${ctaBanner},
${events},
${form},
${gallery},
${members},
${pageBanner},
${products},
${river},
${videos}
`
