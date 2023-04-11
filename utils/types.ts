export interface ImageProps {
  _type: string
  asset: {
    _ref: string
    _type: string
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

export interface SitProps {
  title: string
  description?: string
  siteImage: ImageProps
  contactInfo: {
    email: string
    socials: string[]
  }
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

export interface EventProps {
  dateTime: string
  doorTime?: string
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
  site: SitProps
  products: ProductProps[]
  releases: ReleaseProps[]
  events: EventProps[]
  videos: VideoProps[]
}
