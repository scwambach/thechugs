// basic header component

import { DynamicIcon } from '@components/modules/DynamicIcon'
import { SocialSelector } from '@components/modules/SocialSelector'
import { colors } from '@utils/settings'
import { ContactProps } from '@utils/types'
import { useState } from 'react'
import useSnipcartCount from "@hooks/useSnipcartCount";

const Header = ({ socials }: ContactProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

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
            <li>
              <a
                onClick={() => {
                  setOpen(false)
                }}
                href="#events"
              >
                events
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false)
                }}
                href="#music"
              >
                music
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false)
                }}
                href="#releases"
              >
                releases
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false)
                }}
                href="#images"
              >
                images
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false)
                }}
                href="#videos"
              >
                videos
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false)
                }}
                href="#contact"
              >
                contact
              </a>
            </li>
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
              <DynamicIcon faIcons={true} color={colors.white} size={25} name="cart" />
              {cartHasItems && <span />}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export { Header }
