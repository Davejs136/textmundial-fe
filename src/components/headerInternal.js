import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./header.scss"



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
            <Link className="cabecera__link" to="/">
              <img src={data.logo.publicURL} alt="Logo Texmundial" />
            </Link>
          </div>
          <nav className="cabecera__nav">
            <button className="cabecera__link">&nbsp;</button>
            <button className="cabecera__link">&nbsp;</button>
            <button className="cabecera__link">&nbsp;</button>
            <button className="cabecera__link">&nbsp;</button>
          </nav>
        </div>
      </header>
    )}
  />
)

export default HeaderInternal
