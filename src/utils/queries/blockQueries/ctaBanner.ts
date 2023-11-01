import { commonProps, imageQuery } from '../queryParts'

export const ctaBanner = `_type == 'ctaBanner' => {
  ${commonProps},
  copy,
  backgroundImage {
    ${imageQuery}
  },
  links,
}`
