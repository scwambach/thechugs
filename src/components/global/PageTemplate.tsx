'use client'
import { GlobalInfoProps, NavItemProps } from '@utils/types'
import { ReactNode, createContext } from 'react'
import { Header } from './Header'
import { BackToTop } from '@components/modules/BackToTop'
import BackgroundImage from '../../media/wood.jpg'
import { Footer } from './Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ImageProps } from 'next/image'
import { ImageBlock } from '@components/modules/ImageBlock'
import { BeerFundConfig, resolveBeerFund } from '@utils/beerFund'

interface ContextProps {
  nav: NavItemProps[]
  darkMode: boolean
  beerFund: BeerFundConfig
}

export const AppContext = createContext<ContextProps>({
  nav: [],
  darkMode: false,
  beerFund: resolveBeerFund(undefined),
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
  const beerFund = resolveBeerFund(global?.beerFund)

  return (
    <AppContext.Provider value={{ nav, darkMode: darkMode, beerFund }}>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
      />
      <div className="imageObject mainBg" data-label="background-container">
        <ImageBlock image={BackgroundImage as ImageProps} fill />
      </div>
      <main>
        <Header />
        {children}
        <Footer
          socials={global?.contactInfo?.socials}
          affiliatedLinks={global?.affiliatedFooterLinks}
        />
        <BackToTop />
      </main>
    </AppContext.Provider>
  )
}
