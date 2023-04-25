import { BlurImage } from '@components/modules/BlurImage'
import { Container } from '@components/modules/Container'
import { SocialSelector } from '@components/modules/SocialSelector'
import { breakpoints, colors } from '@utils/settings'
import { ReleaseProps } from '@utils/types'
import moment from 'moment'

const Releases = ({ releases }: { releases: ReleaseProps[] }) => {
  const today = new Date()

  const checkDateIsPastToday = (releaseDate: string) => {
    if (moment(releaseDate).isBefore(today)) {
      return true
    }
    return false
  }

  return (
    <section className="releases" id="releases">
      <Container maxWidth={breakpoints.xxl}>
        <h2 className="section-heading">Releases</h2>
        <div className="inner">
          {releases.map(({ _id, coverArt, links, releaseDate, title }) => {
            return (
              <div key={_id} className="item">
                <BlurImage {...coverArt} />
                <h4>{title}</h4>
                {checkDateIsPastToday(releaseDate) ? (
                  <>
                    {links.map((link) => (
                      <a
                        key={link._key}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{link.copy}</span>
                        <SocialSelector name={link.url} color={colors.black} />
                      </a>
                    ))}
                  </>
                ) : (
                  <>
                    <p>Coming soon</p>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export { Releases }
