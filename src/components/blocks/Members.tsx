import { Container } from '@components/modules/Container'
import { ImageProps, LinkProps, PageBlockProps } from '@utils/types'

interface MembersProps extends PageBlockProps {
  members: {
    name: string
    role: string
    image: ImageProps
    links?: LinkProps[]
  }[]
}

export const Members = (props: MembersProps) => {
  return (
    <div className="members">
      <Container size="wide">
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
      </Container>
    </div>
  )
}
