import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// Imagen
import principal from "../assets/images/tm-sec3.jpg"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Texmundial</h1>
    <section className="principal contenedor">
      <div className="principal__columnas">
        <div className="principal__col-izq">
          <p className="principal__descripcion">
            Somos distribuidores del mejor surtido de telas para trajes de baño
          </p>
        </div>
        <div className="principal__col-der">
          <img src={principal} alt="otra imagen" />
        </div>
      </div>
    </section>

    <section className="productos contenedor">
      <div className="productos__contenedor--interno">
        <h2>Productos</h2>
        <ul className="productos__lista">
          {data.allMarkdownRemark.edges.map(item => (
            <li className="productos__items" key={item.node.frontmatter.id}>
              <Link to={`productos/${item.node.frontmatter.slug}`}>
                <div className="productos__contenedor-imagen">
                  <Img
                    className="productos__imagen"
                    fluid={item.node.frontmatter.imagen.childImageSharp.fluid}
                    alt={item.node.frontmatter.nombre}
                  />
                </div>
                <h3 className="productos__nombre">
                  {item.node.frontmatter.nombre}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="contacto contenedor">
      <div className="contacto__contenido">
        <h2>Reciba nuestra asesoría</h2>
        <div className="contacto__columnas">
          <div className="contacto__col-izq">
            <p className="contacto__descripcion">
              Atención personalizada sin ningún compromiso visitándonos en:
            </p>
          </div>
          <div className="contacto__col-der">
            <div className="contacto__mapa"></div>
          </div>
        </div>
      </div>
    </section>

    <section className="formulario contenedor">
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
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___id] }) {
      edges {
        node {
          frontmatter {
            id
            slug
            nombre
            descripcion
            imagen {
              childImageSharp {
                fluid(maxWidth: 260) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    carousel: file(relativePath: { eq: "tm-sec1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 490) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
