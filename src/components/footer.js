import React from "react"
import Logo from "../assets/images/tm-logo.svg"
import Novanet from "../assets/images/novanet.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fab, fas)

const Footer = () => (
  <footer className="pie">
    <div className="contenedor">
      <img src={Logo} alt="pie logo" className="pie__logo" />
      <ul className="pie__rrss">
        <li className="pie__circulo">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
          />
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
        <img src={Novanet} alt="novanet-logo" className="pie__novanet" />
      </div>
    </div>
  </footer>
)

export default Footer
