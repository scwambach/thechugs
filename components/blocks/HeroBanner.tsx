import { ResponsiveImage } from '@components/modules/ResponsiveImage'
import { BannerProps } from '@utils/types'
import { urlFor } from '@utils/urlFor'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const HeroBanner = ({ heading, image, logo, video }: BannerProps) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return (
    <section className="hero-banner">
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
    </section>
  )
}

export { HeroBanner }
