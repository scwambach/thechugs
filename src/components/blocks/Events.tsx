import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'
import { EventProps } from '@utils/types/modules/EventProps'

interface EventsProps extends PageBlockProps {
  events: EventProps[]
}

export const Events = (props: EventsProps) => {
  return (
    <div className="events">
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
