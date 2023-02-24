import { highlighter } from '@utils/highlighter'
import { LinkObject } from './LinkObject'
import { ResponsiveImage } from './ResponsiveImage'

interface MediaCardProps {
  image?: {
    url: string
    lqip?: string
  }
  title: string
  description?: string
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
  url?: string
}

const Content = ({
  image,
  headingLevel = 3,
  title,
  description,
}: MediaCardProps) => {
  const Heading = `h${headingLevel}` as keyof JSX.IntrinsicElements
  return (
    <>
      {image && (
        <div className="image">
          <ResponsiveImage
            src={image.url}
            lqip={image.lqip}
            isBackground
            alt={`Image for "${title}"`}
          />
        </div>
      )}
      {title && (
        <Heading
          dangerouslySetInnerHTML={{
            __html: highlighter(title),
          }}
        />
      )}
      {description && (
        <p
          dangerouslySetInnerHTML={{
            __html: highlighter(description),
          }}
        />
      )}
      <span className="link">Read More</span>
    </>
  )
}

const MediaCard = ({ image, title, description, url }: MediaCardProps) => {
  const cardProps = {
    image,
    title,
    description,
  }
  return url ? (
    <LinkObject url={url} className="media-card">
      <Content {...cardProps} />
    </LinkObject>
  ) : (
    <div className="media-card">
      <Content {...cardProps} />
    </div>
  )
}

export { MediaCard }
