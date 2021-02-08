import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "./principal.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Principal = () => (
  <StaticQuery
    query={graphql`
      query {
        uno: file(relativePath: { eq: "texmundial-telas-calidad.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 610) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        dos: file(
          relativePath: { eq: "texmundial-asesoria-sin-compromiso.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 610) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tres: file(relativePath: { eq: "texmundial-neopreno-covid19.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 610) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="Principal" className="principal contenedor">
        <div className="principal__columnas">
          <Slider {...settings}>
            <div>
              <div className="principal__col-izq">
                <p className="principal__descripcion">
                  Una buena marca requiere de calidad total empezando por sus
                  telas que las consigues en Texmundial
                </p>
              </div>
              <div className="principal__col-der">
                <Img fluid={data.uno.childImageSharp.fluid} alt="Muestras de las variadas telas que ofrece texmundial, hay diferentes colores y estilos." />
              </div>
            </div>

            <div>
              <div className="principal__col-izq">
                <p className="principal__descripcion">
                  ¿Aún no decide cuál tela le conviene para ese negocio que
                  tiene en mente? Nosotros le asesoramos sin ningún compromiso.
                </p>
              </div>
              <div className="principal__col-der">
                <Img fluid={data.dos.childImageSharp.fluid} alt="Exhibición de la variedad de telas disponibles en la tienda de texmundial." />
              </div>
            </div>

            <div>
              <div className="principal__col-izq">
                <p className="principal__descripcion">
                  Dada la situación actual con el Covid-19, ofrecemos a nuestros
                  clientes neopreno, usado en la elaboración de mascarillas para
                  prevenir el contagio con el virus
                </p>
              </div>
              <div className="principal__col-der">
                <Img
                  fluid={data.tres.childImageSharp.fluid}
                  alt="Muestra de neopreno en gris y negro, vendido por la distribuidora de telas texnundial."
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    )}
  />
)

export default Principal
