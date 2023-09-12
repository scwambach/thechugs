'use client'
import { Container } from '@components/modules/Container'
import { ImageBlock } from '@components/modules/ImageBlock'
import { ImageProps, PageBlockProps } from '@utils/types'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
interface GalleryProps extends PageBlockProps {
  images: ImageProps[]
}

export const Gallery = ({ images }: GalleryProps) => {
  const [activeImageGroup, setActiveImageGroup] = useState<ImageProps>()
  const [open, setOpen] = useState(false)
  return (
    <div className="gallery">
      <div className={`modal${open ? ' open' : ''}`}>
        <button
          className="close"
          onClick={() => {
            setOpen(false)
            document.onkeydown = (e) => {
              if (e.key === 'Escape') {
                setOpen(false)
              }
            }
          }}
        >
          <span className="sr-only">Close</span>
          <AiOutlineClose size={40} />
        </button>

        <div className="image">
          {activeImageGroup && (
            <ImageBlock image={activeImageGroup} height={600} />
          )}
        </div>
      </div>

      <Container size="wide">
        <div className="items">
          {images.map((image, index) => (
            <button
              key={image._key}
              onClick={() => {
                setActiveImageGroup(image)
                setOpen(true)
              }}
            >
              <ImageBlock
                image={image}
                isBackground
                width={200}
                height={200}
                key={image._key}
              />
            </button>
          ))}
        </div>
      </Container>
    </div>
  )
}
