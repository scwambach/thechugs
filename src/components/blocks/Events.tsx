'use client'
import { Container } from '@components/modules/Container'
import { Event as EventItem } from '@components/modules/Event'
import { ImageBlock } from '@components/modules/ImageBlock'
import { ImageProps, PageBlockProps } from '@utils/types'
import { EventProps } from '@utils/types/modules/EventProps'
import dayjs from 'dayjs'
import { useEffect } from 'react'

interface EventsProps extends PageBlockProps {
  events: EventProps[]
  image: ImageProps
}

export const Events = ({ events, image }: EventsProps) => {
  const jsonLd = (evnt: EventProps) => {
    const performers = evnt.otherBands
      ? [
          {
            '@type': 'PerformingGroup',
            name: 'The Chugs',
            url: 'https://thechugsband.com',
          },
          ...evnt.otherBands.map((band) => {
            return {
              '@type': 'PerformingGroup',
              name: band.bandName,
              url: band.link,
            }
          }),
        ]
      : {
          '@type': 'PerformingGroup',
          name: 'The Chugs',
          url: 'https://thechugsband.com',
        }

    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: evnt.title,
      startDate: dayjs(evnt.dateTime).format('YYYY-MM-DDTHH:mm:ssZ'),
      endDate: dayjs(evnt.dateTime).format('YYYY-MM-DDT24:00:00'),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: evnt.location.title,
        address: {
          '@type': 'PostalAddress',
          streetAddress: evnt.location.address,
          addressLocality: evnt.location.cityStateZip.split(',')[0],
          postalCode: evnt.location.cityStateZip.split(' ')[2],
          addressRegion: evnt.location.cityStateZip.split(' ')[1],
          addressCountry: 'US',
        },
      },
      about: undefined,
      description: undefined,
      image: undefined,
      url: evnt.links[0].url,
      performer: performers,
      organizer: {
        '@type': 'Organization',
        name: 'The Chugs',
        url: 'https://thechugsband.com',
      },
    }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(
      events.map((ev) => {
        return jsonLd(ev)
      })
    )

    document.head.appendChild(script)
  }, [])

  return (
    <div className="events">
      <Container size="wide">
        <div className="flex-row">
          <div className="list">
            {events.map((event) => (
              <EventItem key={event._id} {...event} />
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
