import { Footer } from '@components/global/Footer'
import { Header } from '@components/global/Header'
import { Seo } from '@components/global/Seo'
import { SiteProps } from '@utils/types'
import { createContext, useEffect, useState } from 'react'

interface ContextProps {
  scrollingDown?: boolean
  hasWindow?: boolean
  windowWidth?: number
}

export const MainContext = createContext<ContextProps | null>(null)

const Layout = ({
  contactInfo,
  description,
  siteImage,
  title,
  children,
}: SiteProps) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState<number>()
  const [scrollingDown, setScrollingDown] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }

    window.onscroll = () => {
      if (window.oldScroll < window.scrollY && window.scrollY > 100) {
        setScrollingDown(true)
      } else if (window.scrollY < 100) {
        setScrollingDown(false)
      }

      window.oldScroll = window.scrollY
    }

    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  return (
    <MainContext.Provider
      value={{
        scrollingDown,
        hasWindow,
        windowWidth,
      }}
    >
      <Seo
        title={title}
        description={description}
        favicon="/favicon.ico"
        image={siteImage}
      />
      <a className="skip-to-content" href="#main-content">
        Skip to content
      </a>

      <Header {...contactInfo} />
      <main id="main-content">{children}</main>
      <Footer />
    </MainContext.Provider>
  )
}

export { Layout }
