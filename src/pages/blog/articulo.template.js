import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { window } from "browser-monads"
import "./articulo.template.scss"
import {
  InstapaperShareButton,
  InstapaperIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"

const ArticuloTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const shareUrl = window.location.href
  return (
    <Layout>
      <SEO
        title={frontmatter.titulo}
        description={frontmatter.description}
        image={frontmatter.imagen.childImageSharp.fluid}
      />
      <section className="ficha articulo">
        <div className="contenedor">
          <div className="ficha__individual">
            <Link className="ficha__regreso" to="/">
              « Volver al inicio
            </Link>
            <div className="ficha__col-izq ficha__col-izq-articulo">
              <Img
                className="ficha__imagen-principal"
                fluid={frontmatter.imagen.childImageSharp.fluid}
                alt={frontmatter.alt}
              />
            </div>
            <div className="ficha__col-der ficha__col-der-articulo">
              <div className="ficha__informacion">
                <h2 className="ficha__titulo ficha__titulo-articulo">
                  {frontmatter.titulo}
                </h2>
                <div className="ficha__compartir">
                  Compartir
                  <InstapaperShareButton url={shareUrl} children="a">
                    <InstapaperIcon size={28} round={true} />
                  </InstapaperShareButton>
                  <TwitterShareButton url={shareUrl} children="a">
                    <TwitterIcon size={28} round={true} />
                  </TwitterShareButton>
                  <WhatsappShareButton url={shareUrl} children="a">
                    <WhatsappIcon size={28} round={true} />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div
              className="ficha__contenido descripcion"
              dangerouslySetInnerHTML={{ __html: html }}
            />
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
      html
      frontmatter {
        fecha(formatString: "DD MMMM YYYY")
        titulo
        description
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
`
