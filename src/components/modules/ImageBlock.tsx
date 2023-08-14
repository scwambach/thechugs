import Image from 'next/image'

interface ImageProps {
  alt?: string
  height?: number
  isBackground?: boolean
  lqip?: string
  sizes?: string
  src: string
  width?: number
  className?: string
}

const ImageBlock = ({
  alt = '',
  height,
  isBackground,
  lqip,
  sizes,
  src,
  width,
  className,
}: ImageProps) => {
  return (
    <div
      className={`imageBlock ${
        isBackground ? 'background' : 'image'
      }-container${className ? ` ${className}` : ''}`}
    >
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

export { ImageBlock }
