import { commonProps, imageQuery } from '../queryParts'

export const gallery = `_type == 'gallery' => {
  ${commonProps},
  images[] {
    ${imageQuery}
  },
}`
