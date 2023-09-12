import { EventProps } from '@utils/types/modules/EventProps'
import { Button } from './Button'
import dayjs from 'dayjs'

export const Event = ({
  dateTime,
  location,
  otherBands,
  links,
}: EventProps) => {
  return (
    <div className="event">
      <p className="date">{dayjs(dateTime).format('MM.DD')}</p>
      <p className="location">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${location.address}+${location.cityStateZip}`}
        >
          <span>{location.title}</span>
          <br />
          {location.address}
          <br />
          {location.cityStateZip}
        </a>
        {otherBands && (
          <p>
            with:{' '}
            {otherBands.map((band, index) => {
              return (
                <>
                  {otherBands?.length === 2 && index > 0
                    ? ' and '
                    : otherBands?.length === 1
                    ? ''
                    : index + 1 === otherBands?.length
                    ? ', and '
                    : index > 0 && ', '}
                  {band.link ? (
                    <a
                      className="band"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={band.link}
                    >
                      {band.bandName}
                    </a>
                  ) : (
                    <span className="band">{band.bandName}</span>
                  )}
                </>
              )
            })}
          </p>
        )}
      </p>
      <div className="links">
        {links.map((link) => (
          <Button
            buttonStyle="primary"
            tagType="a"
            text={link.copy}
            url={link.url}
            key={link._key}
          />
        ))}
      </div>
    </div>
  )
}
