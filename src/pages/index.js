import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

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
              <Img className="productos__imagen"
                fluid={productosImg.edges[index].node.fluid}
              />
              <p className="productos__nombre">{producto.nombre}</p>
              <Link className="productos__vermas" to={producto.path} >Ver producto</Link>
            </li>
          ))}
        </ul>
    </section>
    <section className="acerca">
    <h2>Acerca de nosotros</h2>
      <article className="acerca__colleft">
        <img src="" alt="otra imagen" className="acerca__imagen" />
        <div className="info">
          <h3 className="info__titulo">¿Cuál es nuestra oferta?</h3>
          <p className="info__contenido">
            Ofrecemos difentes telas con variados colores y estampados para
            confeccionar trajes de baño, ropa ortiva, pijamas, entre otros.
          </p>
        </div>
      </article>
      <article className="acerca__colright">
        <p className="acerca__contenido">
          Somos una empresa con más de 27 años en el mercado conocidos por la
          excelente calidad de nuestros productos.
        </p>
        <div className="info">
          <h3 className="info__titulo">Qué nos distingue?</h3>
          <p className="info__contenido">
            Nos caracterizamos por nuestra disposición a responder todas sus
            preguntas para ayudarle a escoger la tela que más le conviene a su
            negocio.
          </p>
        </div>
      </article>
    </section>
    <section className="asesoria">
      <h3 className="asesoria__titulo">Reciba nuestra asesoría</h3>
      <div className="asesoria__contenedor">
        <h3 className="asesoria__texto">
          Atención personalizada sin ningún compromiso visitándonos en:
        </h3>
        <div className="asesoria__mapa">MAP GOES HERE</div>
      </div>
    </section>
    <section className="contacto">
      <div className="contacto__descripcion">
        También puede consultarnos enviándonos un mensaje a WhatsApp{" "}
        <div className="contacto__info">
          <span className="contacto__ws-icon"></span>+58 414-270-28-86
        </div>{" "}
        a través del siguiente formulario:
      </div>
      <form className="form">
        <input
          type="text"
          placeholder="Nombre completo"
          className="form__input"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="form__input"
        />
        <button type="submit" className="form__button">
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

    carousel: imageSharp(fluid:{originalName:{ eq: "tm-sec1.jpg" }}) {
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