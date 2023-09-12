import { Button } from '@components/modules/Button'
import { Container } from '@components/modules/Container'
import { Event } from '@components/modules/Event'
import { ImageBlock } from '@components/modules/ImageBlock'
import { ImageProps, PageBlockProps } from '@utils/types'
import { EventProps } from '@utils/types/modules/EventProps'
import dayjs from 'dayjs'

interface EventsProps extends PageBlockProps {
  events: EventProps[]
  image: ImageProps
}

export const Events = ({ events, image }: EventsProps) => {
  return (
    <div className="events">
      <Container size="wide">
        <div className="flex-row">
          <div className="list">
            {events.map((event) => (
              <Event key={event._id} {...event} />
            ))}
          </div>
          <div className="image">
            <ImageBlock image={image} isBackground />
          </div>
        </div>
      </Container>
    </div>
  )
}
