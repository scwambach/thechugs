interface Props {
  maxWidth?: number | string
  children?: any
  className?: string
}

const Container = ({ maxWidth, children, className }: Props) => {
  return (
    <div
      className={`container${className ? ` ${className}` : ''}`}
      style={{
        maxWidth: typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`,
      }}
    >
      {children}
    </div>
  )
}

export { Container }
