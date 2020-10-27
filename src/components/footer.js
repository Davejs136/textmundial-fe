import React from "react"
import Logo from "../assets/images/tm-logo.svg"
import Novanet from "../assets/images/novanet.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
// add fas and fab to the library
library.add(fab)

const Footer = () => (
  <footer className="pie">
    <div className="contenedor">
      <div className="pie__logo">
        <img src={Logo} alt="pie logo" />
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
        <p>Distribuidora Texmundial C.A</p>
        <p>
          RIF J-30189818-4. © Derechos reservados - {new Date().getFullYear()}
        </p>
      </div>
      <div className="pie__designers">
        <p className="pie__texto">Diseñado por:</p>
        <a
          href="http://novanet.studio/site/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Novanet} alt="novanet-logo" className="pie__novanet" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
