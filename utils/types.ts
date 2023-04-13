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

export interface LinkProps {
  _key: string
  _type: string
  copy: string
  url: string
}

export interface BannerProps {
  heading: string
  image: ImageProps
  logo: ImageProps
  video: string
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

export interface ReleaseProps {
  title: string
  description?: string
  releaseDate: string
  coverArt: ImageProps
  links: LinkProps[]
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
  title: string
  description?: string
  releaseDate: string
  video: string
}

export interface HomePageProps {
  title: string
  banner: BannerProps
  imageGallery: ImageProps[]
  site: SiteProps
  products: ProductProps[]
  releases: ReleaseProps[]
  events: EventProps[]
  videos: VideoProps[]
}
