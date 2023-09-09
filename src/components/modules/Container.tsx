interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'wide' | 'wider' | 'narrow' | 'narrower' | 'full'
}

export const Container = ({ children, className, size }: ContainerProps) => {
  return (
    <div
      className={`container${size ? ` ${size}` : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  )
}
