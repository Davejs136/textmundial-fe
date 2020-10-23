import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

const ProductoTemplate = ({ data, path }) => (
  <section className="producto">
    {data.markdownRemark.frontmatter.productos
      .filter(producto => producto.path === path)
      .map(producto => (
        <div className="producto__contenedor" key={producto.id}>
          <h2 className="producto__titulo">
            Producto en detalle - {producto.nombre}
          </h2>
          {data.images.edges
            .filter(image => image.node.fluid.src.includes(producto.imagenId))
            .map(imagen => (
              <Img fluid={imagen.node.fluid} key={producto.id} />
            ))}
          <p className="producto__descripcion">{producto.descripcion}</p>
          <span className="producto__precio">{producto.precio}</span>
          <Link to="/">Ir a inicio</Link>
        </div>
      ))}
  </section>
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
