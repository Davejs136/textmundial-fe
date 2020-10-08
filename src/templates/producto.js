import React from 'react'
import { graphql } from 'gatsby'

const ProductoTemplate = ({data:{markdownRemark:{ frontmatter: producto }}}) => (
  <section className="producto">
    <h2 className="producto__titulo">Producto en detalle - {producto.nombre}</h2>
    <p className="producto__descripcion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, distinctio delectus, ex porro doloribus excepturi sequi nobis qui vel eligendi temporibus similique deserunt vero est iste laborum corporis, voluptatibus blanditiis.</p>
    <span className="producto__precio">{producto.precio}</span>
  </section>
)

export default ProductoTemplate

export const query = graphql`
  query ProductoQuery($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path }}) {
      frontmatter {
        nombre
        precio
      }
    }
  }
`