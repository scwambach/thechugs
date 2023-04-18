import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'
import { SanityImageProps } from '@utils/types'
import 'react-medium-image-zoom/dist/styles.css'
import { ImageZoom } from '@components/modules/ImageZoom'

const ImageGallery = ({ images }: { images: SanityImageProps[] }) => {
  return (
    <section id="images" className="imageGallery">
      <h2 className="section-heading">Images</h2>
      <Container maxWidth={breakpoints.xxl}>
        {images.map((img) => {
          return <ImageZoom key={img._key} img={img} />
        })}
      </Container>
    </section>
  )
}

export { ImageGallery }
