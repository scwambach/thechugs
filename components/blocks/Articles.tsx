import { BlurImage } from '@components/modules/BlurImage'
import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'
import { ArticleProps } from '@utils/types'
import moment from 'moment'

const Articles = ({ articles }: { articles: ArticleProps[] }) => {
  const returnDate = (date: string) => {
    return moment(date).format('MMMM DD, YYYY')
  }

  return (
    <section className="articles">
      <Container maxWidth={breakpoints.xxl}>
        {articles.map(({ _id, date, image, link, title }) => (
          <article key={_id}>
            <a href={link} target="_blank" rel="noreferrer">
              <div className="image">
                <BlurImage
                  {...image}
                  imgWidth={500}
                  imgHeight={250}
                  isBackground
                />
              </div>
              <div className="info">
                <h4>{title}</h4>

                <p>
                  <hr />
                  {returnDate(date)}
                </p>
              </div>
            </a>
          </article>
        ))}
      </Container>
    </section>
  )
}

export { Articles }
