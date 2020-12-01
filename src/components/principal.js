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
        uno: file(relativePath: { eq: "tm-sec3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className="principal contenedor">
        <div className="principal__columnas">
          <Slider {...settings}>
            <div>
              <div className="principal__col-izq">
                <p className="principal__descripcion">
                  Somos distribuidores del mejor surtido de telas para trajes de
                  baño
                </p>
              </div>
              <div className="principal__col-der">
                <Img fluid={data.uno.childImageSharp.fluid} alt="otra imagen" />
              </div>
            </div>

            <div>
              <div className="principal__col-izq">
                <p className="principal__descripcion">
                  Otro copy diferente para este slide otro copy diferente para este slide en el carrusel
                </p>
              </div>
              <div className="principal__col-der">
                <Img fluid={data.uno.childImageSharp.fluid} alt="otra imagen" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    )}
  />
)

export default Principal
