import { Container } from '@components/modules/Container'
import { ImageBlock } from '@components/modules/ImageBlock'
import { SectionHeading } from '@components/modules/SectionHeading'
import { clippedContent } from '@utils/clippedContent'
import { ImageProps, PageBlockProps, SectionHeadingProps } from '@utils/types'
import { urlFor } from '@utils/urlFor'
import dayjs from 'dayjs'

interface ArticlesProps extends PageBlockProps {
  latest?: boolean
  articles?: {
    _id: string
    date: string
    description: string
    image: ImageProps
    link: string
    title: string
  }[]
}

export const Articles = ({
  articles,
  copy,
  heading,
  headingLevel,
  subheading,
}: ArticlesProps) => {
  const sectionHeadingObject: SectionHeadingProps = {
    copy,
    heading,
    headingLevel,
    subheading,
  }

  return (
    <div className="articles">
      {heading && <SectionHeading {...sectionHeadingObject} />}
      <Container size="wide">
        <div className="flex-row">
          {articles?.map(({ _id, title, date, link, description, image }) => {
            return (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={_id}
                className="article"
              >
                <div className="image">
                  <div className="zoom-image">
                    <ImageBlock
                      src={urlFor(image).url()}
                      lqip={image.lqip}
                      isBackground
                    />
                  </div>
                </div>
                <div className="info">
                  {title && <p className="title">{title}</p>}
                  {description && (
                    <p className="description">
                      {clippedContent(description, 100)}
                    </p>
                  )}
                  {date && (
                    <p className="date">
                      {dayjs(date).format('MMMM DD, YYYY')}
                    </p>
                  )}
                </div>
              </a>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
