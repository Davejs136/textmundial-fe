import React from "react"

const Footer = () => (
  <footer className="footer">
    <footer className="footer__contenedor">
      <img src="" alt="texmundial-logo" className="footer__textmundial-logo" />
      <div className="footer__instagram">
        <img src="" alt="instagram logo" className="footer__instagram-logo" />
      </div>
      <div className="footer__rights">
        <p className="footer__texto">Distribuidora Texmundial C.A</p>
        <p className="footer__texto">RIF J-30189818-4. © Derechos reservados - {new Date().getFullYear()}</p>
      </div>
      <div className="footer__designers">
        <p className="footer__texto">Diseñado por</p>
        <img src="" alt="novanet-logo" className="footer__novanet-logo" />
      </div>
    </footer>
  </footer>
)

export default Footer