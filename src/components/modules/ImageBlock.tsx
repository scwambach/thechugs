'use client'
import Image, { ImageProps } from 'next/image'

interface ImageBlockProps {
  image: ImageProps
  fill?: boolean
  className?: string
  alt?: string
  width?: number
  height?: number
}

export const ImageBlock = ({
  image,
  fill,
  alt = '',
  className,
  height,
  width,
}: ImageBlockProps) => {
  return (
    <Image
      className={className}
      src={`${image.src}${width ? `?w=${width}` : height ? `?h=${height}` : ''}`}
      placeholder="blur"
      blurDataURL={image.blurDataURL}
      style={{
        objectFit: fill ? 'cover' : 'contain',
      }}
      alt={alt}
      fill={fill}
      width={!fill ? image.width : undefined}
      height={!fill ? image.height : undefined}
    />
  )
}
