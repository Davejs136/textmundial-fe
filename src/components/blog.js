import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import "./blog.scss"

const Blog = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { status: { eq: "activo" } } }
        ) {
          edges {
            node {
              html
              frontmatter {
                titulo
                slug
                alt
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
        }
      }
    `}
    render={data => (
      <section id="Blog" className="blog contenedor">
        <div className="blog__contenido">
          <h2>Blog</h2>
          {data.allMarkdownRemark.edges.map(item => (
            <div className="blog__columnas" key={item.node.frontmatter.slug}>
              <div className="blog__col-izq">
                <Link to={`blog/${item.node.frontmatter.slug}`}>
                  <Img
                    className="blog__imagen"
                    fluid={item.node.frontmatter.imagen.childImageSharp.fluid}
                    alt={item.node.frontmatter.alt}
                  />
                </Link>
              </div>
              <div className="blog__col-der">
                <h2 className="blog__titulo">{item.node.frontmatter.titulo}</h2>
                <ReactMarkdown
                  className="descripcion"
                  source={item.node.html.substring(0, 310).concat("...")}
                  escapeHtml={false}
                />
                <Link
                  className="blog__boton"
                  to={`blog/${item.node.frontmatter.slug}`}
                >
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
  />
)

export default Blog
