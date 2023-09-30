import dayjs from 'dayjs'
import { ImageBlock } from './ImageBlock'
import { MediaCardProps } from '@utils/types/modules/MediaCardProps'

export const MediaCard = ({
  title,
  date,
  link,
  description,
  image,
}: MediaCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mediaCard"
    >
      <div className="image">
        <div className="zoom-image">
          <ImageBlock isBackground image={image} width={800} />
        </div>
      </div>
      <div className="info">
        {title && <p className="title">{title}</p>}
        {description && <p className="description">{description}</p>}
        {date && <p className="date">{dayjs(date).format('MMMM DD, YYYY')}</p>}
      </div>
    </a>
  )
}
