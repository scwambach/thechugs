import { BlurImage } from '@components/modules/BlurImage'
import { ResponsiveImage } from '@components/modules/ResponsiveImage'
import { BannerProps } from '@utils/types'
import { urlFor } from '@utils/urlFor'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import VanillaTilt from 'vanilla-tilt'

const HeroBanner = ({ heading, image, logo, video }: BannerProps) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)

      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting)
      })
      observer.observe(document.querySelector('.hero-banner') as Element)

      if (visible) {
        const video = document.querySelector('video')
        document.getElementsByTagName('header')[0].classList.remove('scrolling')
        video?.play()
      } else {
        document.getElementsByTagName('header')[0].classList.add('scrolling')
      }
    }
  }, [visible, hasWindow])

  const tiltOptions = {
    scale: 1.08,
    speed: 1000,
    glare: false,
    max: 5,
    reverse: true,
  }
  const tilt = useRef(null)

  useEffect(() => {
    if (!tilt.current) return
    VanillaTilt.init(tilt.current, tiltOptions)
  }, [])
  return (
    <section className="hero-banner">
      <div className="inner">
        <div className="background-media">
          {hasWindow && (
            <ReactPlayer
              url={video}
              playing={visible}
              loop
              muted
              width="100%"
              height="100%"
            />
          )}
          <BlurImage isBackground {...image} />
        </div>

        <div className="logo" ref={tilt}>
          <h1 className="sr-only">{heading}</h1>
          <ResponsiveImage
            src={`${urlFor(logo)}`}
            alt=""
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

export { HeroBanner }
