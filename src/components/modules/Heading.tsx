import { HeadingLevel } from '@utils/types'
import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  className?: string
  level: HeadingLevel
}

export const Heading = ({ level, children, className }: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <HeadingTag className={`headingTag${className ? ` ${className}` : ''}`}>
      {children}
    </HeadingTag>
  )
}
