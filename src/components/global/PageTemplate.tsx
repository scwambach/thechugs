'use client'
import { NavItemProps } from '@utils/types'
import { Context, ReactNode, createContext } from 'react'
import { Header } from './Header'
import { BackToTop } from '@components/modules/BackToTop'

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
      <main>
        <Header />
        {children}
        <BackToTop />
      </main>
    </AppContext.Provider>
  )
}
