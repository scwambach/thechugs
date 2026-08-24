import { ButtonList } from '@components/modules/ButtonList'
import { AffiliatedLinkGroupProps, LinkProps } from '@utils/types'

const Footer = ({
  socials,
  affiliatedLinks,
}: {
  socials?: string[]
  affiliatedLinks?: AffiliatedLinkGroupProps[]
}) => {
  const currentYear = new Date().getFullYear()

  const convertToLinkObject = socials?.map(
    (url, index) =>
      ({
        _key: `footersocial${index}`,
        url,
        linkType: 'social',
      }) as LinkProps
  )

  // Drop any group an editor left empty so it does not render a bare heading.
  const linkGroups = affiliatedLinks?.filter(
    (group) => group.links && group.links.length > 0
  )

  return (
    <footer>
      {linkGroups && linkGroups.length > 0 && (
        <div className="footerLinks">
          {linkGroups.map((group) => (
            <div className="footerLinks__group" key={group._key}>
              {group.heading && (
                <h3 className="footerLinks__heading">{group.heading}</h3>
              )}
              <ul className="unstyled">
                {group.links?.map((link) => (
                  <li key={link._key}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {convertToLinkObject && convertToLinkObject.length > 0 && (
        <ButtonList items={convertToLinkObject} />
      )}
      <p className="copyright">&copy; {currentYear} The Chugs</p>
    </footer>
  )
}

export { Footer }
