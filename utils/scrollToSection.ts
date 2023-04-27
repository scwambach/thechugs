export const scrollToSection = (section: string, top?: boolean) => {
  const el = document.getElementById(section)
  if (el) {
    el.scrollIntoView({ block: top ? 'start' : 'center', behavior: 'smooth' })
  }
}
