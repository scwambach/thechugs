import { articles } from './blockQueries/articles'
import { bigBanner } from './blockQueries/bigBanner'
import { ctaBanner } from './blockQueries/ctaBanner'
import { members } from './blockQueries/members'
import { products } from './blockQueries/products'
import { river } from './blockQueries/river'

export const pageBlocks = `
_type,
_key,
${articles},
${bigBanner},
${ctaBanner},
${members},
${products},
${river}
`
