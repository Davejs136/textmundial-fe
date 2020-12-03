import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import "./footer.scss"
// add fas and fab to the library
library.add(fab)

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "texmundial-logo.svg" }) {
          publicURL
        }
        developer: file(relativePath: { eq: "novanet-logo.svg" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <footer className="pie">
        <div className="contenedor">
          <div className="pie__logo">
            <Link to="/">
              <img src={data.logo.publicURL} alt="Logo Texmundial" />
            </Link>
          </div>
          <ul className="pie__rrss">
            <li className="pie__circulo">
              <a
                href="https://www.instagram.com/texmundial/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
            <li className="pie__circulo">
              <a
                href="https://wa.me/584142702886"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "whatsapp"]} />
              </a>
            </li>
          </ul>
          <div className="pie__copy">
            <p>
              Distribuidora Texmundial C.A - RIF J-30189818-4. © Derechos
              reservados - {new Date().getFullYear()}
            </p>
          </div>
          <div className="pie__designers">
            <p>
              Diseñado por:
              <a
                href="http://novanet.studio/site/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={data.developer.publicURL}
                  alt="Logo desarrador del stio web"
                  className="pie__novanet"
                />
              </a>
            </p>
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer
