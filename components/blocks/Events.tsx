import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'
import { EventProps } from '@utils/types'
// import { Event } from '@components/modules/Event'

const Events = ({ events }: { events: EventProps[] }) => {
  return (
    <section id="events" className="events">
      <Container maxWidth={breakpoints.lg}>
        <ul className="unstyled">
          {events.map((event) => (
            <li key={event._id}>
              test
              {/* <Event {...event} /> */}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export { Events }
