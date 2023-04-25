import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'
import { EventProps } from '@utils/types'
import { Event } from '@components/modules/Event'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'

const Events = ({ events }: { events: EventProps[] }) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
      // intersection observer for when it's not in view
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting)
        }
        // { threshold: 0.5 }
      )
      observer.observe(document.querySelector('.events') as Element)
    }
  }, [hasWindow])
  return (
    <section id="events" className="events">
      <div className="background-media">
        {hasWindow && (
          <ReactPlayer
            url="https://res.cloudinary.com/dccdxhera/video/upload/e_saturation:-100/c_fill,w_500/f_auto/v1681794078/The%20Chugs/Screen_Recording_2023-04-17_at_11.56.45_PM_lxxxwl.mp4"
            width="100%"
            height="100%"
            playing={visible}
            muted
            loop
          />
        )}
        /c_scale,h_280/f_auto/dog.mp4
      </div>
      <Container maxWidth={breakpoints.lg}>
        <ul className="unstyled">
          {events.map((event) => (
            <li key={event._id}>
              <Event {...event} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export { Events }
