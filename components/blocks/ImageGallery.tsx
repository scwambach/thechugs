import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'
import { SanityImageProps } from '@utils/types'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useWindowWidth } from '@utils/useWindowWidth'
import { BlurImage } from '@components/modules/BlurImage'

const ImageGallery = ({ images }: { images: SanityImageProps[] }) => {
  const windowWidth = useWindowWidth()
  return (
    <section id="images" className="imageGallery">
      <Container maxWidth={breakpoints.xxl}>
        {images.map((img) => (
          <Zoom
            key={img._key}
            zoomMargin={windowWidth > breakpoints.lg ? 120 : 20}
            zoomImg={{
              alt: '',
            }}
          >
            <BlurImage {...img} />
          </Zoom>
        ))}
      </Container>
    </section>
  )
}

export { ImageGallery }
