export interface ImageProps {
  _key?: string
  _type: string
  asset: {
    _ref: string
    _type: string
  }
  crop?: {
    _type: string
    bottom: number
    left: number
    right: number
    top: number
  }
  hotspot?: {
    _type: string
    height: number
    width: number
    x: number
    y: number
  }
}

export interface SanityImageProps {
  _id?: string
  _key?: string
  alt?: string
  aspectRatio: number
  crop?: any
  height: number
  hotspot?: any
  lqip: string
  reference: ImageProps
  url: string
  width: number
}
export interface LinkProps {
  _key?: string
  _type?: string
  copy: string
  url: string
}

export interface BannerProps {
  heading: string
  image: SanityImageProps
  mobileImage: SanityImageProps
  logo: ImageProps
  video?: string
}

export interface ContactProps {
  email: string
  socials: string[]
}
export interface SiteProps {
  title: string
  children?: React.ReactNode
  description: string
  siteImage: ImageProps
  contactInfo: ContactProps
}

export interface ProductProps {
  title: string
  description?: string
  price: number
  images: ImageProps[]
}

export interface ArticleProps {
  _id: string
  title: string
  image: SanityImageProps
  date: string
  link: string
}

export interface LocationProps {
  address: string
  cityStateZip: string
  link: string
  title: string
}

export interface EventProps {
  _id: string
  dateTime: string
  doorTime?: string
  otherBands?: {
    _id: string
    bandName: string
    link?: string
  }[]
  location: LocationProps
  links: LinkProps[]
  title: string
}

export interface VideoProps {
  _id?: string
  title: string
  image: SanityImageProps
  releaseDate: string
  video: string
}

export interface BioProps {
  heading: string
  image: SanityImageProps
  copy: any[]
}

export interface ReleaseProps {
  _id: string
  title: string
  coverArt: SanityImageProps
  releaseDate: string
  product?: any
  preSaveLink: LinkProps
  links: LinkProps[]
}

export interface HomePageProps {
  title: string
  banner: BannerProps
  artistBio: BioProps
  musicPlayerCode?: {
    code?: string
  }
  imageGallery: SanityImageProps[]
  site: SiteProps
  products: ProductProps[]
  articles?: ArticleProps[]
  events: EventProps[]
  videos: VideoProps[]
  releases: ReleaseProps[]
}

export interface SpotifyPlaylist {
  id: string
  external_urls: { spotify: string }
  name: string
  tracks: { total: number, items: any }
  description: string
  owner: PlaylistOwner
  images: SpotifyImage[]
  email?: string
  followCount?: number
  hasChugs?: boolean
  pitch?: gSheetPitch
}

export interface PlaylistOwner {
  display_name: string
  external_urls: { spotify: string }
}

export interface SpotifyImage {
  url: string
}

export interface gSheetPlaylist {
  name: string,
  email: string,
  pitch: gSheetPitch
}

export interface gSheetPitch {
  song: string,
  response: string,
  placement: string
}
