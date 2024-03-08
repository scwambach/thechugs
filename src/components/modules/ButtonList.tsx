import { ButtonStyle, LinkProps } from '@utils/types'
import { Button } from './Button'
import * as Icon from 'react-icons/si'
import { IconType } from 'react-icons'
import { getDomain } from '@utils/getDomain'
import { iconNames } from '@utils/iconNames'

interface ButtonListProps {
  items: LinkProps[]
  buttonStyle?: ButtonStyle
  tagType?: 'a' | 'button'
}

export const ButtonList = ({
  items,
  tagType = 'a',
  buttonStyle = 'primary',
}: ButtonListProps) => {
  const getIconName = (url: string) => {
    let iconName = iconNames.find((iconName) => {
      return url.includes(iconName.toLowerCase())
    })

    if (iconName === 'Apple') {
      iconName = 'Applemusic'
    }

    return iconName ? `Si${iconName}` : 'SiReact'
  }

  return (
    <ul className="buttonList unstyled">
      {items.map((item) => {
        const SelectedIcon = Icon[
          getIconName(item.url) as keyof typeof Icon
        ] as IconType
        return (
          <li
            key={item._key}
            className={item.linkType === 'social' ? 'social' : undefined}
          >
            {item.linkType === 'url' && (
              <Button
                {...item}
                tagType={tagType}
                buttonStyle={item.buttonStyle || buttonStyle}
              />
            )}
            {item.linkType === 'social' && (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <SelectedIcon size={22} />
                <div className="sr-only">link to {getDomain(item.url)}</div>
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
