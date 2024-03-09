'use client'
import { GlobalInfoProps, NavItemProps } from '@utils/types'
import { ReactNode, createContext } from 'react'
import { Header } from './Header'
import { BackToTop } from '@components/modules/BackToTop'
import BackgroundImage from '../../media/wood.jpg'
import { ImageObject } from '@components/modules/ImageObject'
import { Footer } from './Footer'
import { ImageProps } from 'next/image'

interface ContextProps {
  nav: NavItemProps[]
}

export const AppContext = createContext<ContextProps>({
  nav: [],
})

export const PageTemplate = ({
  children,
  nav,
  global,
}: {
  nav: NavItemProps[]
  children: ReactNode
  global: GlobalInfoProps
}) => {
  return (
    <AppContext.Provider value={{ nav }}>
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
