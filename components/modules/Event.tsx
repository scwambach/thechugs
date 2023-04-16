import { EventProps } from '@utils/types'
import moment from 'moment'
import { Fragment, useEffect, useState } from 'react'
import { FiMapPin } from 'react-icons/fi'

const Event = ({
  dateTime,
  links,
  location,
  title,
  doorTime,
  otherBands,
}: EventProps) => {
  const [month, setMonth] = useState<string>()
  const [day, setDay] = useState<string>()
  const [time, setTime] = useState<string>()
  const [door, setDoor] = useState<string>()

  useEffect(() => {
    const month = moment(dateTime).format('MMM')
    const day = moment(dateTime).format('DD, YYYY')
    const time = moment(dateTime).format('hh:mm A')
    const door = moment(doorTime).format('hh:mm A')

    setMonth(month)
    setDay(day)
    setTime(time)
    setDoor(door)
  }, [])
  return (
    <>
      <div className="section">
        <span className="date">
          <span className="month">{month}</span>
          {day}
        </span>
      </div>
      <div className="section">
        <span className="title">
          {title}
          {otherBands && (
            <ul className="unstyled">
              {otherBands.map(({ _id, bandName, link }, index: number) => (
                <li key={_id}>
                  {index > 0 && <span className="bullet">&bull;</span>}
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {bandName}
                    </a>
                  ) : (
                    bandName
                  )}
                </li>
              ))}
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
        <span className="showTime">
          <strong>Starts @: </strong>
          {time}
        </span>
        <span className="doorTime">
          <strong>Doors @: </strong>
          {door}
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
    </>
  )
}

export { Event }
