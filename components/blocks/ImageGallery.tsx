import { Container } from '@components/modules/Container'
import { ResponsiveImage } from '@components/modules/ResponsiveImage'
import { breakpoints } from '@utils/settings'
import { ImageProps } from '@utils/types'
import { urlFor } from '@utils/urlFor'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ImageGallery = ({ images }: { images: ImageProps[] }) => {
  return (
    <section id="images" className="imageGallery">
      <Container maxWidth={breakpoints.lrgx}>
        {images.map((img, index: number) => (
          <Zoom
            key={img._key}
            zoomImg={{
              alt: '',
              src: `${urlFor(img).width(1200).height(700).fit('crop')}`,
            }}
            zoomMargin={120}
          >
            <ResponsiveImage
              width={1200}
              height={800}
              src={`${urlFor(img).width(1200).quality(80)}`}
              alt={`Gallery Image ${index + 1}`}
            />
          </Zoom>
        ))}
      </Container>
    </section>
  )
}

export { ImageGallery }
