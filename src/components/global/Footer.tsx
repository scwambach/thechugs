const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <p>&copy; {currentYear} The Chugs</p>
    </footer>
  )
}

export { Footer }
