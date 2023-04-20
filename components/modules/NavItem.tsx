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
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ block: top ? 'start' : 'center', behavior: 'smooth' })
    }
  }
  return (
    <li className={className}>
      <a
        onClick={(e) => {
          e.preventDefault()
          setOpen(false)
          scrollToSection(elementId)
        }}
        href={`#${elementId}`}
      >
        {copy || elementId}
      </a>
    </li>
  )
}

export { NavItem }
