import React from "react"
import { graphql, Link } from "gatsby"

const ProductoTemplate = ({ data, path }) => (
  <section className="producto">
    {console.log({ data, path })}
    {data.markdownRemark.frontmatter.productos
      .filter(producto => producto.path === path)
      .map(producto => (
        <>
          <h2 className="producto__titulo">
            Producto en detalle - {producto.nombre}
          </h2>
          <p className="producto__descripcion">{producto.descripcion}</p>
          <span className="producto__precio">{producto.precio}</span>
          <Link to="/">Ir a inicio</Link>
        </>
      ))}
  </section>
)

export default ProductoTemplate

export const query = graphql`
  query ProductoQuery {
    markdownRemark {
      frontmatter {
        productos {
          path
          nombre
          descripcion
        }
      }
    }
  }
`
