import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { ImageBlock } from '@components/modules/ImageBlock'
import { PortableText } from '@portabletext/react'
import { noOrphans } from '@utils/noOrphans'
import { ImageProps, LinkProps, PageBlockProps } from '@utils/types'

interface CtaBannerProps extends PageBlockProps {
  backgroundImage: ImageProps
  links?: LinkProps[]
}

export const CtaBanner = ({
  heading,
  headingLevel = '2',
  subheading,
  backgroundImage,
  backgroundColor,
  copy,
  links,
}: CtaBannerProps) => {
  return (
    <div
      className={`ctaBanner${
        backgroundColor && !backgroundImage
          ? ` bg-${backgroundColor}`
          : !!backgroundImage
          ? ' bg-image'
          : ''
      }`}
    >
      {!!backgroundImage && (
        <>
          <ImageBlock image={backgroundImage} isBackground width={1200} />
          <div className="overlay" />
        </>
      )}
      <Container>
        <div className="copy">
          {heading && (
            <Heading level={headingLevel}>{noOrphans(heading)}</Heading>
          )}
          {subheading && <p className="subheading">{subheading}</p>}
          {copy && (
            <div className="message">
              <PortableText value={copy} />
            </div>
          )}

          {links && <ButtonList items={links} />}
        </div>
      </Container>
    </div>
  )
}
