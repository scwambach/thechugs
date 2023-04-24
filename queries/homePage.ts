const imageQuery = ({
  name,
  fieldName,
}: {
  name: string
  fieldName?: string
}) => {
  return `
  "${fieldName || name}": {
    "reference": ${name},
    "url": ${name}.asset->url,
    "lqip": ${name}.asset->metadata.lqip,
    "alt": ${name}.asset->altText,
    "caption": ${name}.asset->description,
    "crop": ${name}.crop,
    "hotspot": ${name}.hotspot,
    "height": ${name}.asset->metadata.dimensions.height,
    "width": ${name}.asset->metadata.dimensions.width,
    "aspectRatio": ${name}.asset->metadata.dimensions.aspectRatio,
  }
  `
}

export const assetQuery = () => {
  return `
    _key,
    "reference": {
      asset,
      "crop": crop,
      "hotspot": hotspot,
    },
    "url": asset->url,
    "lqip": asset->metadata.lqip,
    "alt": asset->altText,
    "caption": asset->description,
    "crop": crop,
    "hotspot": hotspot,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
  `
}

export const HOMEPAGE_QUERY = `*[_type == "homePage"][0] {
  title,
  banner {
    video,
    logo,
    heading,
    ${imageQuery({ name: 'image' })},
  },
  artistBio {
    heading,
    ${imageQuery({ name: 'image' })},
    copy,
  },
  imageGallery[] {
    ${assetQuery()}
  },
  "site": *[_type == "globalInfo"][0] {
    title,
    description,
    siteImage,
    contactInfo,
  },
  "products": *[_type == "product" && ((_id in path('drafts.**')) == false)] {
    _id,
    title,
    description,
    price,
    images,
  },
  "articles": *[_type == "article" && ((_id in path('drafts.**')) == false)] | order(date desc) {
    _id,
    title,
    date,
    link,
    ${imageQuery({ name: 'image' })},
  },
  "events": *[_type == "event" && ((_id in path('drafts.**')) == false) && dateTime >= $today] | order(dateTime asc) {
    _id,
    title,
    dateTime,
    doorTime,
    otherBands[] -> {
      _id,
      bandName,
      link
    },
    location -> {
      link,
      title,
      address,
      cityStateZip,
    },
    links
  },
  "videos": *[_type == "video" && ((_id in path('drafts.**')) == false)] | order(releaseDate desc) {
    _id,
    title,
    ${imageQuery({ name: 'image' })},
    releaseDate,
    video,
  }
}`
