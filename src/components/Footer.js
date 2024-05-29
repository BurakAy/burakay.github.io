import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>&copy; {currentYear} by Burak Aydemir</footer>
  )
}

export default Footer;