import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data:{ inicio, acerca, productos }}) => (
  <Layout>
    <section className="inicio">
      <h2>{inicio.frontmatter.titulo}</h2>
    </section>
    <hr/>

    <section className="productos">
      <h2>Productos: </h2>
      <ul>
        {productos.edges.map(({ node:{ frontmatter: producto }}) => (
          <li key={producto.nombre}>
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <Link to={producto.path}>Ver producto</Link>
          </li>
        ))}
      </ul>
    </section>
    <hr/>
    <section className="acerca">
      <h2>{acerca.frontmatter.titulo}</h2>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    inicio: markdownRemark(frontmatter: { view: {eq: "inicio"}}) {
      frontmatter {
        titulo
      }
    }

    acerca: markdownRemark(frontmatter: { view: { eq: "acerca" }}) {
      frontmatter {
        titulo
        descripcion
      }
    }

    items: markdownRemark(frontmatter: {view: {eq: "productos"}}) {
      frontmatter {
        productos {
          nombre
          precio
        }
      }
    }

    productos: allMarkdownRemark(filter: {frontmatter: {path: { ne: null }}}) {
      edges {
        node {
          frontmatter {
            path
            nombre
            precio
          }
        }
      }
    }
  }
`