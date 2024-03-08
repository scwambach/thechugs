import { ButtonList } from '@components/modules/ButtonList'
import { LinkProps } from '@utils/types'

const Footer = ({ socials }: { socials?: string[] }) => {
  const currentYear = new Date().getFullYear()

  const convertToLinkObject = socials?.map(
    (url, index) =>
      ({
        _key: `footersocial${index}`,
        url,
        linkType: 'social',
      }) as LinkProps
  )

  return (
    <footer>
      <p>&copy; {currentYear} The Chugs</p>
      {convertToLinkObject && convertToLinkObject.length > 0 && (
        <ButtonList items={convertToLinkObject} />
      )}
    </footer>
  )
}

export { Footer }
