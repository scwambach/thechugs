import { RiverItemProps } from '@utils/types/modules/RiverItemProps'
import { ImageBlock } from './ImageBlock'
import { Heading } from './Heading'
import { PortableText } from '@portabletext/react'
import { ButtonList } from './ButtonList'

export const RiverItem = ({ image, heading, copy, links }: RiverItemProps) => {
  return (
    <div className="riverItem">
      <div className="image">
        <ImageBlock image={image} width={800} isBackground />
      </div>
      <div className="content">
        {heading && <Heading level="3">{heading}</Heading>}
        {copy && <PortableText value={copy} />}
        {links && <ButtonList items={links} />}
      </div>
    </div>
  )
}
