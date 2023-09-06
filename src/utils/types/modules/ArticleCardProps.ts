import { ImageProps } from '..'

export interface ArticleCardProps {
  _id: string
  date: string
  description: string
  image: ImageProps
  link: string
  title: string
}
