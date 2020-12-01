import React from "react"
import "./formulario.scss"

const Formulario = () => {
  return (
    <section id="Formulario" className="formulario contenedor">
      <div className="formulario__contenido">
        <div className="formulario__informacion">
          <p className="formulario__descripcion">
            Consúltenos enviándonos un mensaje a WhatsApp{" "}
            <a
              className="formulario__whatsapp"
              href="https://wa.me/584142702886"
              rel="noopener noreferrer"
              target="_blank"
            >
              +58 414-270-28-86
            </a>{" "}
            o enviános un mensaje a través del siguiente formulario:
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
