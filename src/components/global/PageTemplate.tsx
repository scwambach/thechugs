'use client'
import { GlobalInfoProps, NavItemProps } from '@utils/types'
import { ReactNode, createContext } from 'react'
import { Header } from './Header'
import { BackToTop } from '@components/modules/BackToTop'
import BackgroundImage from '../../media/wood.jpg'
import { ImageObject } from '@components/modules/ImageObject'
import { Footer } from './Footer'
import { GoogleAnalytics } from '@next/third-parties/google'

interface ContextProps {
  nav: NavItemProps[]
  darkMode: boolean
}

export const AppContext = createContext<ContextProps>({
  nav: [],
  darkMode: false,
})

export const PageTemplate = ({
  children,
  nav,
  global,
  darkMode = false,
}: {
  darkMode?: boolean
  nav: NavItemProps[]
  children: ReactNode
  global: GlobalInfoProps
}) => {
  return (
    <AppContext.Provider value={{ nav, darkMode: darkMode }}>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
      />
      <ImageObject
        {...BackgroundImage}
        isBackground
        alt=""
        className="mainBg"
      />
      <main>
        <Header />
        {children}

        <Footer socials={global?.contactInfo?.socials} />
        <BackToTop />
      </main>
    </AppContext.Provider>
  )
}
