import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="header">
    <div className="header__logo-site">
      <img src="" alt="logo" className="head__logo" />
      <p className="head__descripcion">
        Distribuidores del mejor surtido en telas para trajes de baño
      </p>
    </div>
    <nav className="header__nav">
      <Link to="/home" className="header__link">
        Inicio
      </Link>
      <Link to="#productos" className="header__link">
        Productos
      </Link>
      <Link to="#blog" className="header__link">
        Blog
      </Link>
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
