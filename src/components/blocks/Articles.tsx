import { ArticleCard } from '@components/modules/ArticleCard'
import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'
import { ArticleCardProps } from '@utils/types/modules/ArticleCardProps'

interface ArticlesProps extends PageBlockProps {
  latest?: boolean
  articles?: ArticleCardProps[]
}

export const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className="articles">
      <Container size="wide">
        <div className="flex-row">
          {articles?.map((article) => {
            return <ArticleCard key={article._id} {...article} />
          })}
        </div>
      </Container>
    </div>
  )
}
