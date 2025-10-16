import { ImageProps } from 'next/image'

export interface VideoItemProps {
  _id: string
  title?: string
  releaseDate: string
  video: string
  image: ImageProps
}
