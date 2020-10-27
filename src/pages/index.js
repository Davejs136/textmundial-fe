import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// Imagen
import flecha from "../assets/images/flecha.svg"
import nosotros from "../assets/images/tm-sec3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
// add fas and fab to the library
library.add(fab)

const IndexPage = ({
  data: {
    items: {
      frontmatter: { productos },
    },
    carousel,
    productosImg,
  },
}) => (
  <Layout>
    <section className="slider">
      <h1 className="slider__titulo">
        ¿Aún no se decide cuál tela le conviene para ese negocio que tiene en
        mente?
      </h1>
      <div className="slider__imagen">
        <Img fluid={carousel.fluid} alt="tela de color x" />
      </div>
    </section>

    <section className="productos">
      <h2>Productos</h2>
      <ul className="productos__lista">
        {productos.map((producto, index) => (
          <li className="productos__items" key={producto.id}>
            <Img
              className="productos__imagen"
              fluid={productosImg.edges[index].node.fluid}
            />
            <h4 className="productos__nombre">{producto.nombre}</h4>
            <Link className="productos__vermas" to={producto.path}>
              Ver producto
            </Link>
          </li>
        ))}
      </ul>
      <button className="productos__boton">
        <span>Ver todos</span>
        <img src={flecha} alt="flecha boton" />
      </button>
    </section>

    <section className="nosotros">
      <h2>Acerca de nosotros</h2>
      <div className="nosotros__cabecera">
        <div className="nosotros__imagen">
          <img src={nosotros} alt="otra imagen" />
        </div>
        <p className="descripcion">
          Somos una empresa con más de 27 años en el mercado conocidos por la
          excelente calidad de nuestros productos.
        </p>
      </div>
      <div className="nosotros__contenido">
        <div className="nosotros__grupo">
          <h4 className="nosotros__subtitulo">¿Cuál es nuestra oferta?</h4>
          <p className="nosotros__texto">
            Ofrecemos difentes telas con variados colores y estampados para
            confeccionar trajes de baño, ropa ortiva, pijamas, entre otros.
          </p>
        </div>
        <div className="nosotros__grupo">
          <h4 className="nosotros__subtitulo">Qué nos distingue?</h4>
          <p className="nosotros__texto">
            Nos caracterizamos por nuestra disposición a responder todas sus
            preguntas para ayudarle a escoger la tela que más le conviene a su
            negocio
          </p>
        </div>
      </div>
    </section>

    <section className="contacto">
      <h2>Reciba nuestra asesoría</h2>
      <div className="contacto__cabecera">
        <p className="descripcion">
          Atención personalizada sin ningún compromiso visitándonos en:
        </p>
        <div className="contacto__mapa"></div>
      </div>

      <div className="contacto__informacion">
        <p className="descripcion">
          También puede consultarnos enviándonos un mensaje a WhatsApp{" "}
          <a
            className="contacto__whatsapp"
            href="https://wa.me/584142702886"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "whatsapp"]} /> +58 414-270-28-86
          </a>{" "}
          o enviános un mensaje a través del siguiente formulario:
        </p>
      </div>

      <form className="contacto__form">
        <input
          type="text"
          placeholder="Nombre completo"
          className="contacto__input"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="contacto__input"
        />
        <button type="submit" className="contacto__boton">
          Enviar
        </button>
      </form>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    items: markdownRemark {
      frontmatter {
        productos {
          id
          path
          nombre
          descripcion
          imagenId
        }
      }
    }

    carousel: imageSharp(fluid: { originalName: { eq: "tm-sec1.jpg" } }) {
      fluid(maxWidth: 490) {
        ...GatsbyImageSharpFluid
      }
    }

    productosImg: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
