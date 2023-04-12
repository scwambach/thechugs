// basic header component

import { DynamicIcon } from '@components/modules/DynamicIcon'
import { SocialSelector } from '@components/modules/SocialSelector'
import { colors } from '@utils/settings'
import { ContactProps } from '@utils/types'

const Header = ({ socials }: ContactProps) => {
  return (
    <header>
      <nav id="mainNav">
        <ul className="unstyled">
          <li>
            <a href="#events">events</a>
          </li>
          <li>
            <a href="#music">music</a>
          </li>
          <li>
            <a href="#releases">releases</a>
          </li>
          <li>
            <a href="#images">images</a>
          </li>
          <li>
            <a href="#videos">videos</a>
          </li>
          <li>
            <a href="#contact">contact</a>
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
          <a href="#contact">
            <DynamicIcon color={colors.white} size={25} name="email" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export { Header }
