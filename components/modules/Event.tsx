import { EventProps } from '@utils/types'
import moment from 'moment'
import { Fragment } from 'react'
import { FiMapPin } from 'react-icons/fi'

const Event = ({
  dateTime,
  links,
  location,
  title,
  doorTime,
}: // otherBands,
EventProps) => {
  return (
    <>
      <div className="section">
        <span className="date">
          <span className="month">{moment(dateTime).format('MMM')}</span>
          {moment(dateTime).format('DD, YYYY')}
        </span>
      </div>
      <div className="section">
        <span className="title">
          {title}
          {/* {otherBands && (
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
          )} */}
        </span>
        <div className="loc">
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
        </div>
      </div>
      <div className="section">
        <span className="showTime">
          <strong>Starts @: </strong>
          {moment(dateTime).format('hh:mm A')}
        </span>
        <span className="doorTime">
          <strong>Doors @: </strong>
          {moment(doorTime).format('hh:mm A')}
        </span>
        <div className="links">
          {links.map(({ _key, copy, url }, index: number) => (
            <Fragment key={_key}>
              {index > 0 && <span className="bullet">&bull;</span>}
              <a href={url} target="_blank" rel="noopener noreferrer">
                {copy}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export { Event }
