const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <p>&copy; {currentYear} My Website</p>
    </footer>
  )
}

export { Footer }
