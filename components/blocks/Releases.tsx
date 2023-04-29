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
        <div className="inner">
          {releases.map(({ _id, coverArt, links, releaseDate, title }) => {
            return (
              <div key={_id} className="item">
                <BlurImage {...coverArt} />
                <div className="content">
                  <h4>{title}</h4>
                  {checkDateIsPastToday(releaseDate) ? (
                    <div className="links">
                      {links.map((link) => (
                        <a
                          key={link._key}
                          href={link.url}
                          title={link.copy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialSelector
                            name={link.url}
                            color={colors.black}
                          />
                          {link.copy}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="big">coming soon...</p>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export { Releases }
