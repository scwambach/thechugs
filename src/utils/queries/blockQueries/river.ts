import { imageQuery } from '../queryParts'

export const river = `_type == 'river' => {
  items[] {
    _key,
    heading,
    links,
    fitImage,
    copy,
    image {
      ${imageQuery}
    },
  }
}`
