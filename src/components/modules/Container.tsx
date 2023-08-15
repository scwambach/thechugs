interface ContainerProps {
  children: React.ReactNode
  size?: 'wide' | 'narrow' | 'full'
}

export const Container = ({ children, size }: ContainerProps) => {
  return <div className={`container${size ? ` ${size}` : ''}`}>{children}</div>
}
