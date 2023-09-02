import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'

interface VideosProps extends PageBlockProps {}

export const Videos = (props: VideosProps) => {
  return (
    <div className="videos">
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
