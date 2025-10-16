interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'wide' | 'wider' | 'narrow' | 'narrower' | 'full'
  style?: React.CSSProperties
}

export const Container = ({
  children,
  className,
  size,
  style,
}: ContainerProps) => {
  return (
    <div
      className={`container${size ? ` ${size}` : ''}${
        className ? ` ${className}` : ''
      }`}
      style={style}
    >
      {children}
    </div>
  )
}
