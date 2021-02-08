import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "./productos.scss"

const Productos = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___id] }
          filter: { frontmatter: { tipo: { eq: "producto" } } }
        ) {
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
      }
    `}
    render={data => (
      <section id="Productos" className="productos contenedor">
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
    )}
  />
)

export default Productos
