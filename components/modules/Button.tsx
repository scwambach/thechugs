interface ButtonProps {
  children: any
  className?: string
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <div className={`button${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}

export { Button }
