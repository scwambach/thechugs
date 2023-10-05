import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkObjectProps {
  href: string
  children: ReactNode
  className?: string
}

export const LinkObject = ({ href, children, className }: LinkObjectProps) => {
  const isExternal = href.startsWith('http')
  return (
    <>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </>
  )
}
