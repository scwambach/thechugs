import { BlurImage } from '@components/modules/BlurImage'
import { Container } from '@components/modules/Container'
import { SocialSelector } from '@components/modules/SocialSelector'
import { noOrphans } from '@utils/noOrphans'
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
          {releases.map(
            ({ _id, preSaveLink, coverArt, links, releaseDate, title, product = null }) => {
              return (
                <div key={_id} className="item">
                  <BlurImage {...coverArt} />
                  <div className="content">
                    <h4>{title}</h4>
                    {checkDateIsPastToday(releaseDate) ? (
                      <>
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
                        {product && (
                        <button
                          className="snipcart-add-item button"
                          data-item-id={product._id}
                          data-item-price={product.price}
                          data-item-url={`/api/products/${product._id}`}
                          data-item-description={title}
                          data-item-image={product.images[0].url}
                          data-item-name={title}
                          data-item-custom1-type="hidden"
                          data-item-custom1-name="PrintfulProduct"
                          data-item-custom1-value="false">
                            Buy the LP
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="big">coming soon...</p>
                        {preSaveLink.copy && (
                          <a
                            href={preSaveLink.url}
                            title={preSaveLink.copy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pre-save button"
                          >
                            {noOrphans(preSaveLink.copy)}
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )
            }
          )}
        </div>
      </Container>
    </section>
  )
}

export { Releases }
