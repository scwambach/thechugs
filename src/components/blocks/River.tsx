import { ButtonList } from '@components/modules/ButtonList'
import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { ImageBlock } from '@components/modules/ImageBlock'
import { PortableText } from '@portabletext/react'
import { PageBlockProps } from '@utils/types'
import { RiverItemProps } from '@utils/types/modules/RiverItemProps'

interface RiverProps extends PageBlockProps {
  items: RiverItemProps[]
}

export const River = ({ items }: RiverProps) => {
  return (
    <div className="river">
      <Container size="wide">
        <div className="inner">
          {items.map((item) => (
            <div className="riverItem" key={item._key}>
              <div className="image">
                <ImageBlock image={item.image} width={800} isBackground />
              </div>
              <div className="content">
                {item.heading && <Heading level="3">{item.heading}</Heading>}
                {item.copy && <PortableText value={item.copy} />}
                {item.links && <ButtonList items={item.links} />}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
