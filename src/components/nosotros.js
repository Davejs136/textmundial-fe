import React from "react"
import "./nosotros.scss"

const Nosotros = () => (
  <section id="Nosotros" className="nosotros contenedor">
    <h2>Acerca de nosotros</h2>
    <div className="nosotros__contenido">
      <div className="nosotros__columnas nosotros__contenedor--interno">
        <div className="nosotros__col-izq">
          <h3 className="nosotros__subtitulo">¿Cuál es nuestra oferta?</h3>
          <p className="descripcion">
            Somos una empresa con más de 27 años en el mercado, conocidos por la
            excelente calidad de nuestros productos. Ofrecemos diferentes telas
            con variados colores y estampados para confeccionar trajes de baño,
            ropa deportiva, pijamas, entre otros.
          </p>
        </div>
        <div className="nosotros__col-izq">
          <h3 className="nosotros__subtitulo">¿Qué nos distingue?</h3>
          <p className="descripcion">
            Nos caracterizamos por nuestra disposición a responder todas sus
            preguntas para ayudarle a escoger la tela que más le conviene a su
            negocio.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Nosotros
