import { Button } from '@components/modules/Button'
import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { bgStyles } from '@utils/bgStyles'
import { client } from '@utils/client'
import { ImageProps, PageBlockProps } from '@utils/types'
import { EventProps } from '@utils/types/modules/EventProps'
import dayjs from 'dayjs'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'

interface EventsProps extends PageBlockProps {
  events: EventProps[]
  image: ImageProps
}

const eventsImage = (imageUrlBuilder: any, _options: any) => {
  return imageUrlBuilder.width(800)
}

export const Events = ({ events, image }: EventsProps) => {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: eventsImage,
  })

  return (
    <div className="events">
      <Container>
        <div className="flex-row reverse">
          <div className="list">
            {events.map((event) => (
              <div key={event._id}>
                <p className="date">{dayjs(event.dateTime).format('MM.DD')}</p>
                <p className="location">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${event.location.address}+${event.location.cityStateZip}`}
                  >
                    <span>{event.location.title}</span>
                    <br />
                    {event.location.address}
                    <br />
                    {event.location.cityStateZip}
                  </a>
                </p>
                <div className="links">
                  {event.links.map((link) => (
                    <Button
                      buttonStyle="primary"
                      lessPadding
                      tagType="a"
                      text={link.copy}
                      url={link.url}
                      key={link._key}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="image">
            <Image
              {...imageProps}
              alt=""
              className="bg-fit"
              blurDataURL={image.lqip}
              style={bgStyles as any}
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
