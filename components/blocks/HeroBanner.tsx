import { ResponsiveImage } from '@components/modules/ResponsiveImage'
import { BannerProps } from '@utils/types'
import { urlFor } from '@utils/urlFor'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const HeroBanner = ({ heading, image, logo, video }: BannerProps) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)

      // intersection observer for when it's not in view
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting)
        }
        // { threshold: 0.5 }
      )
      observer.observe(document.querySelector('.hero-banner') as Element)

      // if it's in view, play the video
      if (visible) {
        const video = document.querySelector('video')
        document.getElementsByTagName('header')[0].classList.remove('scrolling')
        video?.play()
      } else {
        document.getElementsByTagName('header')[0].classList.add('scrolling')
      }
    }
  }, [visible, hasWindow])
  return (
    <section className="hero-banner">
      <div className="inner">
        <div className="background-media">
          {hasWindow && (
            <ReactPlayer
              url={video}
              playing
              loop
              muted
              width="100%"
              height="100%"
            />
          )}
          <ResponsiveImage
            src={`${urlFor(image).width(2000).quality(75).saturation(-100)}`}
            lqip={`${urlFor(image).width(10).quality(10).saturation(-100)}`}
            alt=""
            isBackground
          />
        </div>

        <div className="logo">
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
