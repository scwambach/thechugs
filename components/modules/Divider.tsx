interface DividerProps {
  size?: 'sm' | 'md' | 'lg'
  line?: boolean
}

const Divider = ({ size = 'sm', line }: DividerProps) => {
  return <div className={`divider size-${size}`}>{line && <hr />}</div>
}

export { Divider }
