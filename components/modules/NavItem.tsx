const NavItem = ({
  setOpen,
  elementId,
  copy,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  elementId: string
  copy?: string
}) => {
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  }
  return (
    <li>
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
