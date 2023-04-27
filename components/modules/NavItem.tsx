import { scrollToSection } from '@utils/scrollToSection'

const NavItem = ({
  setOpen,
  elementId,
  copy,
  top,
  className,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  elementId: string
  copy?: string
  top?: boolean
  className?: string
}) => {
  return (
    <li className={className}>
      <a
        onClick={(e) => {
          e.preventDefault()
          setOpen(false)
          scrollToSection(elementId, top)
        }}
        href={`#${elementId}`}
      >
        {copy || elementId}
      </a>
    </li>
  )
}

export { NavItem }
