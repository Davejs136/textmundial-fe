import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import "./producto.template.scss"
// add fas and fab to the library
library.add(fab)

const ProductoTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.nombre}
        description={frontmatter.descripcion}
        image={frontmatter.imagen.childImageSharp.fluid}
      />
      <section className="ficha">
        <div className="contenedor">
          <div className="ficha__individual">
            <div className="ficha__col-izq">
              <Link className="ficha__regreso" to="/">
                « Ir a inicio
              </Link>
              <div className="ficha__informacion">
                <h2 className="ficha__titulo">{frontmatter.nombre}</h2>
                <p className="descripcion">{frontmatter.descripcion}</p>
              </div>
            </div>
            <div className="ficha__col-der">
              <Img
                className="ficha__imagen-principal"
                fluid={frontmatter.imagen.childImageSharp.fluid}
                alt={frontmatter.nombre}
              />
              <div className="ficha__compartir">
                Compartir
                <div className="ficha__compartir-link">
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </div>
                <div className="ficha__compartir-link">
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </div>
                <div className="ficha__compartir-link">
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                  </a>
                </div>
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
            fluid(maxWidth: 740) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
