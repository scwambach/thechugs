export const HOMEPAGE_QUERY = `*[_type == "homePage"][0] {
  title,
  banner {
    video,
    image,
    logo,
    heading,
  },
  imageGallery[] {
    image,
  },
  "site": *[_type == "globalInfo"][0] {
    title,
    description,
    siteImage,
    contactInfo,
  },
  "products": *[_type == "product" && ((_id in path('drafts.**')) == false)] {
    title,
    description,
    price,
    images,
  },
  "releases": *[_type == "release" && ((_id in path('drafts.**')) == false)] | order(releaseDate asc) {
    title,
    description,
    releaseDate,
    coverArt,
    links,
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
    title,
    description,
    releaseDate,
    video,
  }
}`
