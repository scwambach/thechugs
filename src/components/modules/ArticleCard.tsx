import { clippedContent } from '@utils/clippedContent'
import { ArticleCardProps } from '@utils/types/modules/ArticleCardProps'
import dayjs from 'dayjs'
import { ImageBlock } from './ImageBlock'

export const ArticleCard = ({
  title,
  date,
  link,
  description,
  image,
}: ArticleCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="article"
    >
      <div className="image">
        <div className="zoom-image">
          <ImageBlock isBackground image={image} width={800} />
        </div>
      </div>
      <div className="info">
        {title && <p className="title">{title}</p>}
        {description && (
          <p className="description">{clippedContent(description, 100)}</p>
        )}
        {date && <p className="date">{dayjs(date).format('MMMM DD, YYYY')}</p>}
      </div>
    </a>
  )
}
