import { commonProps, imageQuery } from '../queryParts'

export const pageBanner = `_type == 'pageBanner' => {
  ${commonProps},
  copy,
  image {
    ${imageQuery}
  },
  links,
}`
