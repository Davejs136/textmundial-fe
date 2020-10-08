import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Link to="/home" className="header__link">Inicio</Link>
      <Link to="#productos" className="header__link">Productos</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
