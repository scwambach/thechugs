import { commonProps, imageQuery } from '../queryParts'

export const ctaBanner = `_type == 'ctaBanner' => {
  ${commonProps},
  copy,
  contained,
  paddingBottom,
  darkMode,
  foregroundImage {
    ${imageQuery}
  },
  backgroundImage {
    ${imageQuery}
  },
  links,
}`
