import * as SiIcons from '@meronex/icons/si'
import * as FaIcons from '@meronex/icons/fa'
import { AiOutlineMail, AiOutlineShoppingCart } from '@meronex/icons/ai'
import { colors } from '@utils/settings'
import { BiCopy } from '@meronex/icons/bi'

interface Props {
  name: string
  color?: string
  size?: number
  faIcons?: boolean
  className?: string
}

function DynamicIcon({
  name,
  className,
  size = 50,
  color = colors.black,
  faIcons = false,
}: Props) {
  //@ts-ignore
  const IconComponent = faIcons ? FaIcons[name] : SiIcons[name]
  if (name === 'email') {
    return <AiOutlineMail size={size} color={color} className={className} />
  } else if (name ==='cart') {
    return <AiOutlineShoppingCart size={size} color={color} className={className} />
  } else if (name ==='copy') {
    return <BiCopy size={size} color={color} className={className} />
  }

  if (!IconComponent) {
    return <></>
  }

  return <IconComponent size={size} color={color} className={className} />
}

export { DynamicIcon }