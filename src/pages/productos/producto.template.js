import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"

const ProductoTemplate = ({ data, path }) => (
  <Layout>
    <section className="productos">
      {data.markdownRemark.frontmatter.productos
        .filter(producto => producto.path === path)
        .map(producto => (
          <div className="contenedor" key={producto.id}>
            <div>
              <h2 className="productos__titulo">
                Producto en detalle - {producto.nombre}
              </h2>
              {data.images.edges
                .filter(image =>
                  image.node.fluid.src.includes(producto.imagenId)
                )
                .map(imagen => (
                  <Img
                    className="productos__imagen"
                    fluid={imagen.node.fluid}
                    key={producto.id}
                  />
                ))}
            </div>
            <p className="descripcion">{producto.descripcion}</p>
            <span className="productos__precio">{producto.precio}</span>
            <Link to="/">Ir a inicio</Link>
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
