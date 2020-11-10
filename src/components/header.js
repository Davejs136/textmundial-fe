import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// Imagen
import Logo from "../assets/images/tm-logo.svg"

const Header = () => (
  <header className="cabecera">
    <div className="contenedor">
      <div className="cabecera__logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <p className="cabecera__descripcion">
          Distribuidores del mejor surtido en telas para trajes de baño
        </p>
      </div>
      <nav className="cabecera__nav">
        <Link to="/" className="cabecera__link">
          Inicio
        </Link>
        <Link to="#productos" className="cabecera__link">
          Productos
        </Link>
        <Link to="#blog" className="cabecera__link">
          Blog
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
