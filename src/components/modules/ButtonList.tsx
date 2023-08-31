import { ButtonStyle, LinkProps } from '@utils/types'
import { Button } from './Button'

interface ButtonListProps {
  items: LinkProps[]
  buttonStyle?: ButtonStyle
}

export const ButtonList = ({ items }: ButtonListProps) => {
  return (
    <ul className="buttonList unstyled">
      {items.map((item) => (
        <li key={item._key}>
          <Button {...item} tagType="a" />
        </li>
      ))}
    </ul>
  )
}
