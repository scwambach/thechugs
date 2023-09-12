'use client'
import { bgStyles } from '@utils/bgStyles'
import { client } from '@utils/client'
import { ImageProps } from '@utils/types'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { useState } from 'react'

// TODO: Fix all this mess

interface ImageBlockProps {
  image: ImageProps
  width?: number
  height?: number
  desaturate?: boolean
  alt?: string
  className?: string
  isBackground?: boolean
}

export const ImageBlock = ({
  isBackground,
  alt = '',
  className,
  image,
  width = 800,
  height,
  desaturate,
}: ImageBlockProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const customBuilder = (imageUrlBuilder: any, _options: any) => {
    if (height && desaturate) {
      return (imageUrlBuilder = imageUrlBuilder
        .saturation(-100)
        .width(width)
        .height(height))
    }

    if (desaturate && !height) {
      return (imageUrlBuilder = imageUrlBuilder.saturation(-100).width(width))
    }

    if (height && !desaturate) {
      return (imageUrlBuilder = imageUrlBuilder.width(width).height(height))
    }

    return imageUrlBuilder.width(width)
  }

  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: customBuilder,
  })

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <Image
      {...imageProps}
      alt={alt}
      className={`${isBackground ? 'bg-fit' : ''}${
        isBackground && className ? ' ' : ''
      }${className ? `${className}` : ''}${
        isImageLoaded ? ' loaded' : ' loading'
      }`}
      style={isBackground ? (bgStyles as any) : undefined}
      placeholder="blur"
      blurDataURL={image.lqip}
      onLoad={handleImageLoad}
    />
  )
}
