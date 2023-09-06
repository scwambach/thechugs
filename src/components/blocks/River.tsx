import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'
import { RiverItemProps } from '@utils/types/modules/RiverItemProps'

interface RiverProps extends PageBlockProps {
  items: RiverItemProps[]
}

export const River = (props: RiverProps) => {
  return (
    <div className="river">
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
