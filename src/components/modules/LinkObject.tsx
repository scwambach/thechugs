interface LinkObjectProps {}

export const LinkObject = (props: LinkObjectProps) => {
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
