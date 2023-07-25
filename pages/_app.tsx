import '@styles/main.scss'
import { WishlistProvider } from 'context/wishlist'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  const ga = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  return (
    <>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga}');
        `}
      </Script>
      <WishlistProvider>
        <Component {...pageProps} />
      </WishlistProvider>
    </>
  )
}
