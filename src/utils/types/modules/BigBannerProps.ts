import { ImageProps } from 'next/image'

export interface BigBannerProps {
  componentId?: string
  backgroundImage: ImageProps
  logo: ImageProps
  screenReaderText: string
}
