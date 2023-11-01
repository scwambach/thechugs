import { commonProps, imageQuery } from '../queryParts'

export const videos = `_type == 'videos' => {
  ${commonProps},
  items[] -> {
    _id,
    video,
    title,
    releaseDate,
    image {
      ${imageQuery}
    }
  }
}`
