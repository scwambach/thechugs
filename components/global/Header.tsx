// basic header component

import { DynamicIcon } from '@components/modules/DynamicIcon'
import { ContactProps } from '@utils/types'

const Header = ({ socials }: ContactProps) => {
  return (
    <header>
      <nav id="mainNav">
        <ul>
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
      <ul className="socials">
        {socials.map((soc) => (
          <li key={soc}>
            <a href={soc} target="_blank" rel="noreferrer noopener">
              {soc.indexOf('instagram') !== -1 ? (
                <DynamicIcon name="SiInstagram" />
              ) : soc.indexOf('facebook') !== -1 ? (
                <DynamicIcon name="SiFacebook" />
              ) : soc.indexOf('twitter') !== -1 ? (
                <DynamicIcon name="SiTwitter" />
              ) : soc.indexOf('youtube') !== -1 ? (
                <DynamicIcon name="SiYoutube" />
              ) : soc.indexOf('bandCamp') !== -1 ? (
                <DynamicIcon name="SiBandCamp" />
              ) : soc.indexOf('spotify') !== -1 ? (
                <DynamicIcon name="SiSpotify" />
              ) : soc.indexOf('soundcloud') !== -1 ? (
                <DynamicIcon name="SiSoundcloud" />
              ) : soc.indexOf('apple') !== -1 ? (
                <DynamicIcon name="SiApplemusic" />
              ) : soc.indexOf('reverbnation') !== -1 ? (
                <DynamicIcon name="SiReverbnation" />
              ) : soc.indexOf('patreon') !== -1 ? (
                <DynamicIcon name="SiPatreon" />
              ) : soc.indexOf('tiktok') !== -1 ? (
                <DynamicIcon name="SiTiktok" />
              ) : (
                <DynamicIcon name="website" />
              )}
              <span className="sr-only">{soc}</span>
            </a>
          </li>
        ))}
        <li>
          <a href="#contact">
            <DynamicIcon name="email" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export { Header }
