'use client'
import { ImageBlock } from '@components/modules/ImageBlock'
import { BigBannerProps } from '@utils/types/modules/BigBannerProps'
import { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'

const BigBanner = ({
  componentId = 'bigBanner',
  backgroundImage,
  logo,
  screenReaderText,
}: BigBannerProps) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)

      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting)
      })
      observer.observe(document.getElementById(componentId) as Element)
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
    <div className="bigBanner" id={componentId}>
      <ImageBlock image={backgroundImage} isBackground={true} />
      <div className="logo">
        <div className="logoTilt" ref={tilt}>
          <ImageBlock image={logo} alt={screenReaderText} />
        </div>
        <span className="sr-only">{screenReaderText}</span>
      </div>
    </div>
  )
}

export { BigBanner }
