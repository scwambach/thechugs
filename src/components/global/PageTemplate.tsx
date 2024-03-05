'use client'
import { NavItemProps } from '@utils/types'
import { ReactNode, createContext } from 'react'
import { Header } from './Header'
import { BackToTop } from '@components/modules/BackToTop'
import BackgroundImage from '../../media/wood.jpg'
import { ImageObject } from '@components/modules/ImageObject'

interface ContextProps {
  nav: NavItemProps[]
}

export const AppContext = createContext<ContextProps>({
  nav: [],
})

export const PageTemplate = ({
  children,
  nav,
}: {
  nav: NavItemProps[]
  children: ReactNode
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
        <BackToTop />
      </main>
    </AppContext.Provider>
  )
}
