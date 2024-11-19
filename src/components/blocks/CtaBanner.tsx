import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { ImageBlock } from '@components/modules/ImageBlock'
import { PortableText } from '@portabletext/react'
import { LinkProps, PageBlockProps } from '@utils/types'
import { ImageProps } from 'next/image'

interface CtaBannerProps extends PageBlockProps {
  backgroundImage: ImageProps
  foregroundImage?: ImageProps
  contained?: boolean
  darkMode?: boolean
  paddingBottom?: boolean
  links?: LinkProps[]
}

export const CtaBanner = ({
  heading,
  headingLevel = '2',
  subheading,
  paddingBottom,
  backgroundImage,
  foregroundImage,
  copy,
  darkMode,
  contained,
  links,
}: CtaBannerProps) => {
  const isFeature = foregroundImage && links && contained

  return (
    <div
      className={`ctaBanner${contained ? ' contained' : ''}${
        paddingBottom ? ' feature' : ''
      }${darkMode ? ' darkMode' : ''}`}
    >
      {!!backgroundImage && <ImageBlock image={backgroundImage} fill />}
      <Container>
        <div className={`copy${foregroundImage ? ' flex' : ''}`}>
          {foregroundImage && (
            <ImageBlock image={foregroundImage} width={600} />
          )}
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
