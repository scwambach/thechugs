import { ImageBlockProps } from '@utils/types/modules/ImageBlock'
import Image from 'next/image'

export const ImageBlock = ({
  alt = '',
  height,
  isBackground,
  lqip,
  sizes,
  src,
  width,
  className,
}: ImageBlockProps) => {
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
