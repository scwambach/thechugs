import { MediaCard } from '@components/modules/MediaCard'
import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'
import dayjs from 'dayjs'
import { ArticleProps } from '@utils/types/modules/ArticleProps'

interface ArticlesProps extends PageBlockProps {
  latest?: boolean
  articles?: ArticleProps[]
}

export const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className="articles">
      <Container size="wide">
        <div className="list">
          {articles?.map((article) => {
            return (
              <MediaCard
                key={article._id}
                {...article}
                info={dayjs(article.date).format('MMMM DD, YYYY')}
              />
            )
          })}
        </div>
      </Container>
    </div>
  )
}
