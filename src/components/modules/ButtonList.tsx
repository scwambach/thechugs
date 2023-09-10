import { ButtonStyle, LinkProps } from '@utils/types'
import { Button } from './Button'
import * as Icon from 'react-icons/si'
import { IconType } from 'react-icons'
import { getDomain } from '@utils/getDomain'

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
  return (
    <ul className="buttonList unstyled">
      {items.map((item) => {
        const iconName = `Si${
          getDomain(item.url).charAt(0).toUpperCase() +
          getDomain(item.url).slice(1)
        }`

        // @ts-ignore
        const SelectedIcon = Icon[iconName] as IconType
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
              <a href={item.url}>
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
