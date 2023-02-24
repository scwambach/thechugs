import Link from 'next/link'

interface LinkObjectProps {
  children: React.ReactNode
  className?: string
  url: string
}

const LinkObject = ({ children, className, url }: LinkObjectProps) => {
  const isInternal = url.startsWith('/')
  return isInternal ? (
    <Link className={className} href={url}>
      {children}
    </Link>
  ) : (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export { LinkObject }
