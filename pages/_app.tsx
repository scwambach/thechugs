import '@styles/main.scss'
import { WishlistProvider } from 'context/wishlist'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <WishlistProvider>
        <Component {...pageProps} />
      </WishlistProvider>
    </>
  )
}
