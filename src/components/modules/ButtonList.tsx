import { ButtonStyle, LinkProps } from '@utils/types'
import { Button } from './Button'

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
      {items.map((item) => (
        <li key={item._key}>
          <Button {...item} tagType={tagType} buttonStyle={buttonStyle} />
        </li>
      ))}
    </ul>
  )
}
