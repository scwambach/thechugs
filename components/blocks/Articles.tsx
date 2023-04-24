import { BlurImage } from '@components/modules/BlurImage'
import { Container } from '@components/modules/Container'
import { returnDate } from '@utils/returnDate'
import { breakpoints } from '@utils/settings'
import { ArticleProps } from '@utils/types'

const Articles = ({ articles }: { articles: ArticleProps[] }) => {
  return (
    <section className="articles" id="articles">
      <Container maxWidth={breakpoints.xxl}>
        <h2 className="section-heading">Articles</h2>
      </Container>
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

                <hr />
                <p>{returnDate(date)}</p>
              </div>
            </a>
          </article>
        ))}
      </Container>
    </section>
  )
}

export { Articles }
