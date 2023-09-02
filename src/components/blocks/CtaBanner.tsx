import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'

interface CtaBannerProps extends PageBlockProps {}

export const CtaBanner = (props: CtaBannerProps) => {
  return (
    <div className="ctaBanner">
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
