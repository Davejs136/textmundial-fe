import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: false,
  arrows: false,
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
            <div className="principal__col-izq">
              <p className="principal__descripcion">
                Somos distribuidores del mejor surtido de telas para trajes de
                baño
              </p>
            </div>
            <div className="principal__col-der">
              {console.log(data.uno)}
              <Img fluid={data.uno.childImageSharp.fluid} alt="otra imagen" />
            </div>
          </Slider>
        </div>
      </section>
    )}
  />
)

export default Principal
