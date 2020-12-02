import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

// add fas and fab to the library
library.add(fab)

const ArticuloTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.titulo}
        description={frontmatter.description}
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
                <h2 className="ficha__titulo">{frontmatter.titulo}</h2>
                {/* <p className="descripcion">{frontmatter.descripcion}</p> */}
              </div>
            </div>
            <div className="ficha__col-der">
              <Img
                className="ficha__imagen-principal"
                fluid={frontmatter.imagen.childImageSharp.fluid}
                alt={frontmatter.alt}
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

export default ArticuloTemplate

export const query = graphql`
  query ArticuloQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        fecha(formatString: "DD MMMM YYYY")
        titulo
        description
        imagen {
          childImageSharp {
            fluid(maxWidth: 610) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
