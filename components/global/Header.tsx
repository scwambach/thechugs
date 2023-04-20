// basic header component

import { DynamicIcon } from '@components/modules/DynamicIcon'
import { SocialSelector } from '@components/modules/SocialSelector'
import { colors } from '@utils/settings'
import { ContactProps } from '@utils/types'
import { useState } from 'react'
import useSnipcartCount from '@hooks/useSnipcartCount'
import { NavItem } from '@components/modules/NavItem'

interface HeaderProps extends ContactProps {
  hasArticles?: boolean
  hasVideos?: boolean
}

const Header = ({ socials, hasArticles, hasVideos }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { cart } = useSnipcartCount()
  const cartHasItems = cart.items.count !== 0

  return (
    <header className={open ? 'open' : undefined}>
      <button
        type="button"
        className={`toggle${open ? ' active' : ''}`}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={open ? 'open' : undefined}>
        <nav id="mainNav">
          <ul className="unstyled">
            <NavItem elementId="events" setOpen={setOpen} />
            <NavItem elementId="music" setOpen={setOpen} />
            {hasArticles && <NavItem elementId="articles" setOpen={setOpen} />}
            <NavItem elementId="images" setOpen={setOpen} />
            {hasVideos && <NavItem elementId="videos" setOpen={setOpen} />}
            <NavItem elementId="contact" setOpen={setOpen} />
          </ul>
        </nav>
        <ul className="socials unstyled">
          {socials.map((soc) => (
            <li key={soc}>
              <a href={soc} target="_blank" rel="noreferrer noopener">
                <SocialSelector name={soc} color={colors.white} />
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={() => {
                setOpen(false)
              }}
              href="#contact"
            >
              <DynamicIcon color={colors.white} size={25} name="email" />
            </a>
          </li>
          <li>
            <a className="snipcart-checkout">
              <DynamicIcon
                faIcons={true}
                color={colors.white}
                size={25}
                name="cart"
              />
              {cartHasItems && <span />}
            </a>
          </li>
        </ul>
      </div>
      <NavItem
        elementId="main-content"
        copy="Back to top"
        setOpen={setOpen}
        top
        className="back-to-top"
      />
    </header>
  )
}

export { Header }
