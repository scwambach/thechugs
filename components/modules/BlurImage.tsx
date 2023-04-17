import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/legacy/image'
import { client } from '@utils/client'
import { newRatio } from '@utils/newRatio'
import { breakpoints } from '@utils/settings'
import { SanityImageProps } from '@utils/types'
import { useWindowWidth } from '@utils/useWindowWidth'

interface BlurImageProps extends SanityImageProps {
  className?: string
  imgHeight?: number
  imgWidth?: number
  grayscale?: boolean
  isBackground?: boolean
  mobileCrop?: boolean | 'squared'
  overrideSize?: boolean
  priority?: boolean
  quality?: number
  thin?: boolean
  title?: string
}

const BlurImage = ({
  alt = '',
  className,
  crop,
  height,
  imgHeight,
  grayscale,
  imgWidth = breakpoints.xxl,
  isBackground = false,
  lqip,
  mobileCrop,
  overrideSize = false,
  priority = false,
  quality = 90,
  reference,
  title,
  url,
  width,
}: BlurImageProps) => {
  const windowWidth = useWindowWidth()

  const myCustomImageBuilder = (imageUrlBuilder: any) => {
    if (imgHeight) {
      if (mobileCrop) {
        if (windowWidth < breakpoints.sm) {
          return imageUrlBuilder
            .width(breakpoints.sm)
            .height(
              mobileCrop === 'squared' ? breakpoints.sm : breakpoints.sm * 1.5
            )
            .quality(quality)
            .fit('clip')
        }

        if (windowWidth < breakpoints.md) {
          return imageUrlBuilder
            .width(breakpoints.md)
            .height(
              mobileCrop === 'squared' ? breakpoints.md : breakpoints.md / 1.5
            )
            .quality(quality)
            .fit('clip')
        }

        if (windowWidth > 2000) {
          return imageUrlBuilder
            .width(imgWidth)
            .height(imgHeight)
            .quality(quality)
            .fit('clip')
        }
      }
      return imageUrlBuilder
        .width(imgWidth)
        .height(imgHeight)
        .quality(quality)
        .fit('clip')
    }

    if (mobileCrop) {
      if (windowWidth < breakpoints.sm) {
        return imageUrlBuilder
          .width(breakpoints.sm)
          .height(
            mobileCrop === 'squared' ? breakpoints.sm : breakpoints.sm * 1.5
          )
          .quality(quality)
          .fit('clip')
      }

      if (windowWidth < breakpoints.md) {
        return imageUrlBuilder
          .width(breakpoints.md)
          .height(
            mobileCrop === 'squared' ? breakpoints.md : breakpoints.md / 1.5
          )
          .quality(quality)
          .fit('clip')
      }

      if (windowWidth > 2000) {
        return imageUrlBuilder
          .width(imgWidth + 600)
          .height(900)
          .quality(quality)
          .fit('clip')
      }

      return imageUrlBuilder.width(imgWidth).quality(quality)
    }
    return imageUrlBuilder.width(imgWidth).quality(quality)
  }

  const imageProps: any = useNextSanityImage(client, reference, {
    imageBuilder: myCustomImageBuilder,
  })

  const dimensions = newRatio(crop, {
    height: height,
    width: width,
  })

  return (
    <div
      className={`blur-image${grayscale ? ' grayscale' : ''}${
        isBackground ? ' bg-container' : ''
      }`}
    >
      <Image
        alt={alt}
        title={title || alt}
        height={
          isBackground ? undefined : overrideSize ? height : dimensions.height
        }
        width={
          isBackground ? undefined : overrideSize ? width : dimensions.width
        }
        layout={isBackground ? 'fill' : 'intrinsic'}
        src={imageProps ? imageProps.src : url}
        blurDataURL={lqip}
        priority={priority}
        quality={quality}
        placeholder="blur"
        className={className}
      />
    </div>
  )
}

export { BlurImage }
