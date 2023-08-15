interface ButtonProps {}

const Button = (props: ButtonProps) => {
  return (
    <code>
      <pre
        style={{
          fontFamily: 'monospace',
          display: 'block',
          padding: '50px',
          color: '#88ffbf',
          backgroundColor: 'black',
          textAlign: 'left',
          whiteSpace: 'pre-wrap',
        }}
      >
        {JSON.stringify(props, null, '    ')}
      </pre>
    </code>
  )
}

export { Button }
