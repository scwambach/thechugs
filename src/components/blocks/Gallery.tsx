'use client'
import { Container } from '@components/modules/Container'
import { ImageBlock } from '@components/modules/ImageBlock'
import { Loading } from '@components/modules/Loading'
import { ImageProps, PageBlockProps } from '@utils/types'
import { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

interface GalleryProps extends PageBlockProps {
  images: ImageProps[]
}

export const Gallery = ({ images }: GalleryProps) => {
  const [activeImage, setActiveImage] = useState<ImageProps>()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
  }, [])

  return (
    <div className="gallery">
      <div className={`modal${open ? ' open' : ''}`}>
        <button
          className="close"
          onClick={() => {
            setOpen(false)
          }}
        >
          <span className="sr-only">Close</span>
          <AiOutlineClose size={40} />
        </button>
        <div className="prev">
          <button
            onClick={() => {
              const index = images.findIndex(
                (image) => image._key === activeImage?._key
              )
              if (index === 0) {
                setActiveImage(images[images.length - 1])
              } else {
                setActiveImage(images[index - 1])
              }
            }}
          >
            <AiOutlineLeft size={40} />

            <span className="sr-only">Prev</span>
          </button>
        </div>
        <div className="image">
          {activeImage && (
            <div className={`inner`}>
              <ImageBlock
                image={activeImage}
                className="activeImage"
                width={1200}
              />
            </div>
          )}
        </div>
        <div className="next">
          <button
            onClick={() => {
              setActiveImage(undefined)
              setTimeout(() => {
                const index = images.findIndex(
                  (image) => image._key === activeImage?._key
                )
                if (index === images.length - 1) {
                  setActiveImage(images[0])
                } else {
                  setActiveImage(images[index + 1])
                }
              }, 10)
            }}
          >
            <AiOutlineRight size={40} />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>

      <Container size="wide">
        <div className="items">
          {images.map((image) => (
            <button
              key={image._key}
              onClick={() => {
                setActiveImage(image)
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
