import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { window } from "browser-monads"
import "./header.scss"

const location = window.location.pathname


const HeaderInternal = () => (
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
            <Link
              className="cabecera__link"
              to={`${location}/#Principal`}              
            >
              <img src={data.logo.publicURL} alt="Logo Texmundial" />
            </Link>
          </div>
          <nav className="cabecera__nav">
            <button
              className="cabecera__link"
              to={`${location}/#Productos`}  
            >
              Productos
            </button>
            <button
              className="cabecera__link"
              to={`${location}/#Mapa`}  
            >
              Nosotros
            </button>
            <button
              className="cabecera__link"
              to={`${location}/#Blog`}  
            >
              Blog
            </button>
            <button
              className="cabecera__link"
              to={`${location}/#Formulario`}  
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>
    )}
  />
)

export default HeaderInternal
