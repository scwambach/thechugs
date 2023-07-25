import '@styles/main.scss'
import { WishlistProvider } from 'context/wishlist'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SFN3FMNWT8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SFN3FMNWT8');
        `}
      </Script>
      <WishlistProvider>
        <Component {...pageProps} />
      </WishlistProvider>
    </>
  )
}
