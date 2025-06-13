import { HeadingLevel } from '@utils/types'
import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  headingId?: string
  className?: string
  level: HeadingLevel
}

export const Heading = ({
  level,
  children,
  headingId,
  className,
}: HeadingProps) => {
  const HeadingTag = `h${level}` as any

  return (
    <HeadingTag
      id={headingId ? headingId : undefined}
      className={`headingTag${className ? ` ${className}` : ''}`}
    >
      {children}
    </HeadingTag>
  )
}
