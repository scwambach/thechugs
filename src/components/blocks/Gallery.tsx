'use client'
import { Container } from '@components/modules/Container'
import { ImageBlock } from '@components/modules/ImageBlock'
import { PageBlockProps } from '@utils/types'
import { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'
import {
  AiOutlineClose,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai'

interface GalleryProps extends PageBlockProps {
  images: ImageProps[]
}

export const Gallery = ({ images }: GalleryProps) => {
  const [activeImage, setActiveImage] = useState<ImageProps>()
  const [open, setOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

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
            setActiveImage(undefined)
            setIsOpening(false)
          }}
        >
          <span className="sr-only">Close</span>
          <AiOutlineClose size={40} />
        </button>
        <div className="prev">
          <button
            onClick={() => {
              setIsOpening(false)
              const index = images.findIndex(
                (image) => image.src === activeImage?.src
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
          {isOpening && (
            <div className="loading-spinner">
              <AiOutlineLoading3Quarters size={48} />
            </div>
          )}
          {activeImage && (
            <div className={`inner${isOpening ? ' mainImgLoading' : ''}`}>
              <ImageBlock
                image={activeImage}
                className="activeImage"
                width={1200}
                onLoad={() => setIsOpening(false)}
              />
            </div>
          )}
        </div>
        <div className="next">
          <button
            onClick={() => {
              setIsOpening(false)
              const index = images.findIndex(
                (image) => image.src === activeImage?.src
              )
              if (index === images.length - 1) {
                setActiveImage(images[0])
              } else {
                setActiveImage(images[index + 1])
              }
            }}
          >
            <AiOutlineRight size={40} />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>

      <div>
        <div className="items">
          {images.map((image) => (
            <button
              key={`${image.src}`}
              onClick={() => {
                setIsOpening(true)
                setActiveImage(image)
                setOpen(true)
              }}
            >
              <ImageBlock image={image} fill width={300} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
