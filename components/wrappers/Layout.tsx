import { Footer } from '@components/global/Footer'
import { Header } from '@components/global/Header'
import { Seo } from '@components/global/Seo'
import { SiteProps } from '@utils/types'

interface LayoutProps extends SiteProps {
  hasArticles?: boolean
  hasVideos?: boolean
}

const Layout = ({
  contactInfo,
  description,
  siteImage,
  title,
  hasArticles,
  hasVideos,
  children,
}: LayoutProps) => {
  return (
    <>
      <Seo
        title={title}
        description={description}
        favicon="/favicon.png"
        image={siteImage}
      />
      <a className="skip-to-content" href="#main-content">
        Skip to content
      </a>

      <Header
        {...contactInfo}
        hasArticles={hasArticles}
        hasVideos={hasVideos}
      />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}

export { Layout }
