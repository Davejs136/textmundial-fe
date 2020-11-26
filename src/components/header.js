import { Link } from "gatsby"
import React from "react"
import Logo from "../assets/images/tm-logo.svg"

const Header = () => (
  <header className="cabecera">
    <div className="contenedor">
      <div className="cabecera__logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav className="cabecera__nav">
        <Link to="#nosotros" className="cabecera__link">
          Nosotros
        </Link>
        <Link to="#productos" className="cabecera__link">
          Productos
        </Link>
        <Link to="#contacto" className="cabecera__link">
          Contacto
        </Link>
      </nav>
    </div>
  </header>
)


export default Header
