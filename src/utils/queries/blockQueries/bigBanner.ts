import { imageQuery } from '../queryParts'

export const bigBanner = `_type == 'bigBanner' => {
  backgroundImage {
    ${imageQuery}
  },
  logo {
    ${imageQuery}
  },
  screenReaderText
}`
