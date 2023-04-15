import { Container } from '@components/modules/Container'
import { ResponsiveImage } from '@components/modules/ResponsiveImage'
import { breakpoints } from '@utils/settings'
import { ImageProps } from '@utils/types'
import { urlFor } from '@utils/urlFor'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useWindowWidth } from '@utils/useWindowWidth'

const ImageGallery = ({ images }: { images: ImageProps[] }) => {
  const windowWidth = useWindowWidth()
  return (
    <section id="images" className="imageGallery">
      <Container maxWidth={breakpoints.xxl}>
        {images.map((img, index: number) => (
          <Zoom
            key={img._key}
            zoomMargin={windowWidth > breakpoints.lg ? 120 : 20}
            zoomImg={{
              alt: '',
              src: `${urlFor(img).width(1200).height(700).fit('crop')}`,
            }}
          >
            <ResponsiveImage
              width={1200}
              height={900}
              lqip={`${urlFor(img)
                .width(12)
                .height(9)
                .quality(80)
                .fit('crop')}`}
              src={`${urlFor(img)
                .width(1200)
                .height(900)
                .quality(80)
                .fit('crop')}`}
              alt={`Gallery Image ${index + 1}`}
            />
          </Zoom>
        ))}
      </Container>
    </section>
  )
}

export { ImageGallery }
