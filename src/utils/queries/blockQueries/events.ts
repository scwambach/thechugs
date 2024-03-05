import { commonProps, imageQuery } from '../queryParts'

export const events = `_type == 'events' => {
  ${commonProps},
  image {
    ${imageQuery}
  },
  "events": *[_type == "event" && dateTime >= now()] | order(dateTime asc) {
    _id,
    dateTime,
    flyer {
      ${imageQuery}
    },
    otherBands[] -> {
      _id,
      link,
      bandName,
    },
    location -> {
      title,
      link,
      address,
      cityStateZip,
    },
    doorTime,
    links,
    title,
  }
}`
