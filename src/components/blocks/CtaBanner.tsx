import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { ImageBlock } from '@components/modules/ImageBlock'
import { PortableText } from '@portabletext/react'
import { ImageProps, LinkProps, PageBlockProps } from '@utils/types'

interface CtaBannerProps extends PageBlockProps {
  backgroundImage: ImageProps
  foregroundImage?: ImageProps
  contained?: boolean
  links?: LinkProps[]
}

export const CtaBanner = ({
  heading,
  headingLevel = '2',
  subheading,
  backgroundImage,
  foregroundImage,
  copy,
  contained,
  links,
}: CtaBannerProps) => {
  return (
    <div className={`ctaBanner${contained ? ' contained' : ''}`}>
      {!!backgroundImage && (
        <ImageBlock image={backgroundImage} isBackground width={1200} />
      )}
      <Container>
        <div className={`copy${foregroundImage ? ' flex' : ''}`}>
          {foregroundImage && <ImageBlock image={foregroundImage} />}
          <div>
            {heading && <Heading level={headingLevel}>{heading}</Heading>}
            {subheading && <p className="subheading">{subheading}</p>}
            {copy && (
              <div className="message">
                <PortableText value={copy} />
              </div>
            )}

            {links && <ButtonList items={links} />}
          </div>
        </div>
      </Container>
    </div>
  )
}
