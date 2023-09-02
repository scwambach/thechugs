import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'

interface MembersProps extends PageBlockProps {}

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
