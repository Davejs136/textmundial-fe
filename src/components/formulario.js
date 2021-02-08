import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import "./formulario.scss"
// add fas and fab to the library
library.add(fab)

const Formulario = () => {
  return (
    <section id="Formulario" className="formulario contenedor">
      <div className="formulario__contenido">
        <div className="formulario__informacion">
          <p className="formulario__descripcion">
            Mándenos un mensaje por{" "}
            <a
              className="formulario__whatsapp"
              href="https://wa.me/584142702886"
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp <FontAwesomeIcon icon={["fab", "whatsapp"]} size="1x" /> 
              0414.270.28.86
            </a>{" "}
            o por el siguiente formulario:
          </p>
        </div>

        <form className="formulario__form">
          <input
            type="text"
            placeholder="Nombre completo"
            className="formulario__input"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="formulario__input"
          />
          <textarea
            name="textarea"
            placeholder="Mensaje"
            rows="1"
            cols="1"
            className="formulario__textarea"
          ></textarea>
          <button type="submit" className="formulario__boton">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Formulario
