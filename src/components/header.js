import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticQuery, graphql, Link } from "gatsby"
import "./header.scss"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "texmundial-logo.svg" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <header className="cabecera">
        <div className="contenedor">
          <div className="cabecera__logo">
            <Link className="cabecera__link" to="/" onClick={() => scrollTo("#Principal")}>
              <img src={data.logo.publicURL} alt="Logo Texmundial" />
            </Link>
          </div>
          <nav className="cabecera__nav">
            <button
              className="cabecera__link"
              onClick={() => scrollTo("#Productos")}
            >
              Productos
            </button>
            <button
              className="cabecera__link"
              onClick={() => scrollTo("#Mapa")}
            >
              Nosotros
            </button>
            <button
              className="cabecera__link"
              onClick={() => scrollTo("#Blog")}
            >
              Blog
            </button>
            <button
              className="cabecera__link"
              onClick={() => scrollTo("#Formulario")}
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>
    )}
  />
)

export default Header
