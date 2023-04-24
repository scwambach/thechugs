import { BlurImage } from '@components/modules/BlurImage'
import { PortableText } from '@portabletext/react'
import { BioProps } from '@utils/types'

const Bio = (props: BioProps) => {
  return (
    <section className="bio" id="bio">
      <div className="copy">
        <div className="inner">
          <h2>{props.heading}</h2>
          <PortableText value={props.copy} />
        </div>
      </div>
      <div className="image">
        <BlurImage {...props.image} isBackground />
      </div>
    </section>
  )
}

export { Bio }
