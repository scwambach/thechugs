import { SectionHeadingProps } from '@utils/types'
import { Container } from './Container'
import { Heading } from './Heading'
import { PortableText } from '@portabletext/react'

export const SectionHeading = ({
  heading,
  headingLevel = '2',
  copy,
  subheading,
}: SectionHeadingProps) => {
  return (
    <div className="sectionHeading">
      <Container>
        {heading && <Heading level={headingLevel}>{heading}</Heading>}
        {subheading && <p className="subheading">{subheading}</p>}
        {copy && <PortableText value={copy} />}
      </Container>
    </div>
  )
}
