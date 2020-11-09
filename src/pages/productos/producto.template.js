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

const ProductoTemplate = ({ data, path }) => (
  <Layout>
    <section className="productos">
      {data.markdownRemark.frontmatter.productos
        .filter(producto => producto.path === path)
        .map(producto => (
          <div key={producto.id} className="productos__individual">
            <Link className="productos__regreso" to="/">
              « Ir a inicio
            </Link>
            <div className="productos__col-izq">
              <h1 className="productos__titulo">
                Producto - {producto.nombre}
              </h1>
              <div className="productos__informacion">
                <h3>Descripción</h3>
                <p className="descripcion">{producto.descripcion}</p>
              </div>
              <span className="productos__precio">{producto.precio}</span>
            </div>

            <div className="productos__col-der">
              {data.images.edges
                .filter(image =>
                  image.node.fluid.src.includes(producto.imagenId)
                )
                .map(imagen => (
                  <Img
                    className="productos__imagen-principal"
                    fluid={imagen.node.fluid}
                    key={producto.id}
                  />
                ))}
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
        ))}
    </section>
  </Layout>
)

export default ProductoTemplate

export const query = graphql`
  query ProductoQuery {
    markdownRemark {
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

    images: allImageSharp {
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
