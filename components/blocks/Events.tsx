import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'
import { EventProps } from '@utils/types'
import { FiMapPin } from 'react-icons/fi'
import dayjs from 'dayjs'
import { Fragment } from 'react'

const Events = ({ events }: { events: EventProps[] }) => {
  return (
    <section id="events" className="events">
      <Container maxWidth={breakpoints.lg}>
        <ul className="unstyled">
          {events.map(
            ({
              title,
              otherBands,
              _id,
              dateTime,
              location,
              doorTime,
              links,
            }) => (
              <li key={_id}>
                <div className="section">
                  <span className="title">
                    {title}
                    {otherBands && (
                      <ul className="unstyled">
                        {otherBands.map(
                          ({ _id, bandName, link }, index: number) => (
                            <li key={_id}>
                              {index > 0 && (
                                <span className="bullet">&bull;</span>
                              )}
                              {link ? (
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {bandName}
                                </a>
                              ) : (
                                bandName
                              )}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </span>
                  <span className="loc">
                    <a
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={location.link}
                    >
                      {location.title}
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mapLink"
                      href={`https://www.google.com/maps/place/${location.address} ${location.cityStateZip}`}
                    >
                      <FiMapPin />
                      Find It Here
                    </a>
                  </span>
                </div>
                <div className="section">
                  <span className="date">
                    <span className="month">
                      {dayjs(dateTime).format('MMM')}
                    </span>
                    {dayjs(dateTime).format('DD, YYYY')}
                  </span>
                </div>
                <div className="section">
                  <span className="showTime">
                    <strong>Starts @: </strong>
                    {dayjs(dateTime).format('hh:mm A')}
                  </span>
                  <span className="doorTime">
                    <strong>Doors @: </strong>
                    {dayjs(doorTime).format('hh:mm A')}
                  </span>
                  <span className="links">
                    {links.map(({ _key, copy, url }, index: number) => (
                      <Fragment key={_key}>
                        {index > 0 && <span className="bullet">&bull;</span>}
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {copy}
                        </a>
                      </Fragment>
                    ))}
                  </span>
                </div>
              </li>
            )
          )}
        </ul>
      </Container>
    </section>
  )
}

export { Events }