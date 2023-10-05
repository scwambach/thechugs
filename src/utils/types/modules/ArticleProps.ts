import { ImageProps } from '..'

export interface ArticleProps {
  _id: string
  title: string
  description: string
  image: ImageProps
  date: string
  link: string
}
