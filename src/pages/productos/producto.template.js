import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
// add fas and fab to the library
library.add(fab)

const ProductoTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <section className="productos">
        <div className="productos__individual">
          <Link className="productos__regreso" to="/">
            « Ir a inicio
          </Link>
          <div className="productos__col-izq">
            <h1 className="productos__titulo">{frontmatter.nombre}</h1>
            <div className="productos__informacion">
              <h3>Descripción</h3>
              <p className="descripcion">{frontmatter.descripcion}</p>
            </div>
          </div>
          <div className="productos__col-der">
            <Img
              className="productos__imagen-principal"
              fluid={frontmatter.imagen.childImageSharp.fluid}
              alt={frontmatter.nombre}
            />
            <div className="productos__compartir">
              Compartir
              <div className="productos__compartir-link">
                <a
                  href="https://www.instagram.com/texmundial/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </div>
              <div className="productos__compartir-link">
                <a
                  href="https://www.instagram.com/texmundial/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </div>
              <div className="productos__compartir-link">
                <a
                  href="https://wa.me/584142702886"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProductoTemplate

export const query = graphql`
  query ProductoQuery($id: String) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      frontmatter {
        id
        nombre
        descripcion
        imagen {
          childImageSharp {
            fluid(maxWidth: 490) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
