'use client'
import { Container } from '@components/modules/Container'
import { ImageBlock } from '@components/modules/ImageBlock'
import { Loading } from '@components/modules/Loading'
import { ImageProps, PageBlockProps } from '@utils/types'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
interface GalleryProps extends PageBlockProps {
  images: ImageProps[]
}

// TODO: figure out why the images shrink after one cycle

export const Gallery = ({ images }: GalleryProps) => {
  const [activeImageGroup, setActiveImageGroup] = useState<ImageProps>()
  const [open, setOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === 'Escape') {
        setTimeout(() => {
          setImageLoaded(false)
        }, 300)
        setOpen(false)
      }
    }

    // click anything that isn't the .modal.image element to close
    document.addEventListener('click', (e) => {
      if (
        e.target &&
        e.target instanceof HTMLElement &&
        (e.target.className === 'modal open' ||
          e.target.className === 'modal image')
      ) {
        setTimeout(() => {
          setImageLoaded(false)
        }, 300)
        setOpen(false)
      }
    })
  }, [])

  return (
    <div className="gallery">
      <div className={`modal${open ? ' open' : ''}`}>
        <button
          className="close"
          onClick={() => {
            setTimeout(() => {
              setImageLoaded(false)
            }, 300)
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
                (image) => image._key === activeImageGroup?._key
              )
              if (index === 0) {
                setActiveImageGroup(images[images.length - 1])
              } else {
                setActiveImageGroup(images[index - 1])
              }
            }}
          >
            Prev
          </button>
        </div>
        <div className="image">
          {activeImageGroup && (
            <div className={`inner${imageLoaded ? '' : ' mainImgLoading'}`}>
              <ImageBlock
                image={activeImageGroup}
                height={800}
                className="activeImage"
                setImageLoaded={setImageLoaded}
              />
              {!imageLoaded && <Loading />}
            </div>
          )}
        </div>
        <div className="next">
          <button
            onClick={() => {
              const index = images.findIndex(
                (image) => image._key === activeImageGroup?._key
              )
              if (index === images.length - 1) {
                setActiveImageGroup(images[0])
              } else {
                setActiveImageGroup(images[index + 1])
              }
            }}
          >
            Next
          </button>
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
