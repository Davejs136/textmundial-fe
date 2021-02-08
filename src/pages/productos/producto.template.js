import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import LayoutInternal from "../../components/layoutInternal"
import SEO from "../../components/seo"
import { window } from "browser-monads"
import "./producto.template.scss"
import {
  InstapaperShareButton,
  InstapaperIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"

const ProductoTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  const shareUrl = window.location.href
  return (
    <LayoutInternal>
      <SEO
        title={frontmatter.nombre}
        description={frontmatter.descripcion}
        image={frontmatter.imagen.childImageSharp.fluid}
      />
      <section className="ficha">
        <div className="contenedor">
          <div className="ficha__individual">
            <div className="ficha__col-izq">
              <Link className="ficha__regreso" to="/">
                « Volver al inicio
              </Link>
              <div className="ficha__informacion descripcion">
                <h2 className="ficha__titulo">{frontmatter.nombre}</h2>
                <p>{frontmatter.descripcion}</p>
              </div>
            </div>
            <div className="ficha__col-der">
              <Img
                className="ficha__imagen-principal"
                fluid={frontmatter.imagen.childImageSharp.fluid}
                alt={frontmatter.nombre}
              />
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
        </div>
      </section>
    </LayoutInternal>
  )
}

export default ProductoTemplate

export const query = graphql`
  query ProductoQuery($id: String) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      frontmatter {
        id
        nombre
        descripcion
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
