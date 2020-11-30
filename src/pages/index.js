import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMapReact from "google-map-react"

const IndexPage = ({ data }) => {
  const ubicacion = {
    center: {
      lat: 10.5055579,
      lng: -66.9091227,
    },
    zoom: 18,
  }

  return (
    <Layout>
      <SEO
        title="Texmundial - Distribuidores de telas para trajes de baño."
        description="Somos una empresa con más de 27 años en el mercado, conocidos por la excelente calidad de nuestras telas."
        image="http://gruponovanet.com.ve/misc/tm-site-thumb.jpg"
      />
      <h1>Texmundial</h1>
      <section id="Principal" className="principal contenedor">
        <div className="principal__columnas">
          <div className="principal__col-izq">
            <p className="principal__descripcion">
              Somos distribuidores del mejor surtido de telas para trajes de
              baño
            </p>
          </div>
          <div className="principal__col-der">
            <Img fluid={data.uno.childImageSharp.fluid} alt="otra imagen" />
          </div>
        </div>
      </section>

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

      <section id="Contacto" className="contacto contenedor">
        <div className="contacto__contenido">
          <h2>Reciba nuestra asesoría</h2>
          <div className="contacto__columnas">
            <div className="contacto__col-izq">
              <p className="contacto__descripcion">
                Atención personalizada sin ningún compromiso visitándonos en:
              </p>
            </div>
            <div className="contacto__col-der">
              <div className="contacto__mapa">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: process.env.GATSBY_GOOGLE_MAPS_KEY,
                  }}
                  defaultCenter={ubicacion.center}
                  defaultZoom={ubicacion.zoom}
                >
                  {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  /> */}
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Nosotros" className="nosotros contenedor">
        <h2>Acerca de nosotros</h2>
        <div className="nosotros__contenido">
          <div className="nosotros__columnas nosotros__contenedor--interno">
            <div className="nosotros__col-izq">
              <h3 className="nosotros__subtitulo">¿Cuál es nuestra oferta?</h3>
              <p className="descripcion">
                Ofrecemos difentes telas con variados colores y estampados para
                confeccionar trajes de baño, ropa ortiva, pijamas, entre otros.
              </p>
            </div>
            <div className="nosotros__col-izq">
              <h3 className="nosotros__subtitulo">Qué nos distingue?</h3>
              <p className="descripcion">
                Nos caracterizamos por nuestra disposición a responder todas sus
                preguntas para ayudarle a escoger la tela que más le conviene a
                su negocio
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Formulario" className="formulario contenedor">
        <div className="formulario__contenido">
          <div className="formulario__informacion">
            <p className="formulario__descripcion">
              Consúltenos enviándonos un mensaje a WhatsApp{" "}
              <a
                className="formulario__whatsapp"
                href="https://wa.me/584142702886"
                rel="noopener noreferrer"
                target="_blank"
              >
                +58 414-270-28-86
              </a>{" "}
              o enviános un mensaje a través del siguiente formulario:
            </p>
          </div>

          <form className="formulario__form">
            <input
              type="text"
              placeholder="Nombre completo"
              className="formulario__input"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="formulario__input"
            />
            <textarea
              name="textarea"
              placeholder="Mensaje"
              rows="1"
              cols="1"
              className="formulario__textarea"
            ></textarea>
            <button type="submit" className="formulario__boton">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___id] }) {
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
    uno: file(relativePath: { eq: "tm-sec3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 490) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
