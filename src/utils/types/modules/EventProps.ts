import { LinkProps } from '..'

export interface EventProps {
  _id: string
  links: LinkProps[]
  title: string
  dateTime: string
  otherBands?: {
    _id: string
    link?: string
    bandName: string
  }[]
  doorTime?: string
  location: {
    title: string
    link: string
    address: string
    cityStateZip: string
  }
}