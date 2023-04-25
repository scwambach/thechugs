import { useWindowWidth } from '@hooks/useWindowWidth'
import { breakpoints } from '@utils/settings'
import { SanityImageProps } from '@utils/types'
import { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { BlurImage } from './BlurImage'

const ImageZoom = ({ img }: { img: SanityImageProps }) => {
  const windowWidth = useWindowWidth()
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom)
  }, [])
  return (
    <ControlledZoom
      zoomMargin={windowWidth > breakpoints.lg ? 120 : 20}
      zoomImg={{
        alt: '',
      }}
      isZoomed={isZoomed}
      onZoomChange={handleZoomChange}
    >
      <BlurImage {...img} />
    </ControlledZoom>
  )
}

export { ImageZoom }
