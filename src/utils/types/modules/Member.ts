import { ImageProps, LinkProps } from '..'

export interface MemberProps {
  _key: string
  name: string
  role: string
  image: ImageProps
  links?: LinkProps[]
}