import { ReactNode } from 'react'
import { ButtonStyle } from '..'

export interface ButtonProps {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  tagType?: 'a' | 'button'
  buttonStyle?: ButtonStyle
  text?: string
  url?: string
}
