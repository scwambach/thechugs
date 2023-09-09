import { bgStyles } from '@utils/bgStyles'
import { client } from '@utils/client'
import { clippedContent } from '@utils/clippedContent'
import { ArticleCardProps } from '@utils/types/modules/ArticleCardProps'
import dayjs from 'dayjs'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'

const articleCardImage = (imageUrlBuilder: any, _options: any) => {
  return imageUrlBuilder.width(600)
}

export const ArticleCard = ({
  title,
  date,
  link,
  description,
  image,
}: ArticleCardProps) => {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: articleCardImage,
  })

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="article"
    >
      <div className="image">
        <div className="zoom-image">
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
