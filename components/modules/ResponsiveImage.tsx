import Image from 'next/image'

interface ImageProps {
  alt: string
  height?: number
  isBackground?: boolean
  lqip?: string
  sizes?: string
  src: string
  width?: number
}

const ResponsiveImage = ({
  alt,
  height,
  isBackground,
  lqip,
  sizes,
  src,
  width,
}: ImageProps) => {
  return (
    <div data-label={`${isBackground ? 'background' : 'image'}-container`}>
      <Image
        src={src}
        alt={alt}
        fill={isBackground}
        sizes={sizes}
        width={!isBackground ? width : undefined}
        height={!isBackground ? height : undefined}
        placeholder={lqip ? 'blur' : undefined}
        blurDataURL={lqip}
      />
    </div>
  )
}

export { ResponsiveImage }
