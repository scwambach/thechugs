'use client'
import { bgStyles } from '@utils/bgStyles'
import { client } from '@utils/client'
import { ImageProps } from '@utils/types'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { useState } from 'react'

interface ImageBlockProps {
  image: ImageProps
  width?: number
  height?: number
  desaturate?: boolean
  alt?: string
  className?: string
  setImageLoaded?: (isImageLoaded: boolean) => void
  isBackground?: boolean
}

export const ImageBlock = ({
  isBackground,
  alt = '',
  className,
  image,
  width = 800,
  height,
  setImageLoaded,
  desaturate,
}: ImageBlockProps) => {
  const customBuilder = (imageUrlBuilder: any, _options: any) => {
    if (height && desaturate) {
      return (imageUrlBuilder = imageUrlBuilder
        .saturation(-100)
        .width(width)
        .height(height))
    }

    if (desaturate && !height) {
      return (imageUrlBuilder = imageUrlBuilder
        .saturation(-100)
        .width(width)
        .fit('scale'))
    }

    if (height && !desaturate) {
      return (imageUrlBuilder = imageUrlBuilder
        .width(width)
        .height(height)
        .fit('scale'))
    }

    return imageUrlBuilder.width(width).fit('scale')
  }

  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: customBuilder,
  })

  const handleImageLoad = () => {
    if (setImageLoaded) {
      setTimeout(() => {
        setImageLoaded(true)
      }, 300)
    }
  }

  return (
    <Image
      {...imageProps}
      alt={alt}
      className={`${isBackground ? 'bg-fit' : ''}${
        isBackground && className ? ' ' : ''
      }${className ? `${className}` : ''}`}
      style={isBackground ? (bgStyles as any) : undefined}
      placeholder="blur"
      blurDataURL={image.lqip}
      onLoad={handleImageLoad}
    />
  )
}
