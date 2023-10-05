import { ImageBlock } from './ImageBlock'
import { MediaCardProps } from '@utils/types/modules/MediaCardProps'
import { LinkObject } from './LinkObject'

export const MediaCard = ({
  title,
  info,
  link,
  description,
  image,
}: MediaCardProps) => {
  return (
    <LinkObject href={link} className="mediaCard">
      <div className="image">
        <div className="zoom-image">
          <ImageBlock isBackground image={image} width={800} />
        </div>
      </div>
      <div className="meta">
        {title && <p className="title">{title}</p>}
        {description && <p className="description">{description}</p>}
        {info && <p className="info">{info}</p>}
      </div>
    </LinkObject>
  )
}
