import { commonProps, imageQuery } from '../queryParts'

export const members = `_type == 'members' => {
  ${commonProps},
  "members": *[_type == 'globalInfo'].members[] {
    ...,
    image {
      ${imageQuery}
    } 
  },
}`
