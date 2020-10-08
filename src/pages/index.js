import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const IndexPage = ({
  data: {
    items: {
      frontmatter: { productos },
    },
  },
}) => (
  <Layout>
    <section className="principal">
      <article className="principal__izquierda">
        <h1 className="princupal__titulo">
          ¿Aún no decide cuál tela le conviene para ese negocio que tiene en
          mente?
        </h1>
        <p className="principal__subdescripcion"></p>
      </article>
      <article className="principal__derecha">
        <h2 className="principal__descripcion">
          Nosotros le asesoramos sin ningún compromiso.
        </h2>
        <img src="" alt="imagen" className="principal__imagen" />
      </article>
    </section>
    <section className="productos">
      <ul className="productos__lista">
        {productos.map(producto => (
          <li className="productos__item" key={producto.nombre}>
            <img src="" alt="producto x" className="productos__imagen" />
            <p className="productos__nombre">{producto.nombre}</p>
            <p className="productos__precio">{producto.precio}</p>
            <Link to={""} className="productos__link">
              Ver producto
            </Link>
          </li>
        ))}
      </ul>
    </section>
    <section className="acerca">
      <article className="acerca__izquierda">
        <h3 className="acerca__titulo">
          Somos una empresa con más de 27 años en el mercado
        </h3>
        <img src="" alt="otra imagen" className="acerca__imagen" />
      </article>
      <article className="acerca__derecha">
        <p className="acerca__contenido">
          conocidos por la excelente calidad de nuestros productos. Ofrecemos
          diferentes telas con variados colores y estampados para confeccionar
          trajes de baño, ropa deportiva, pijamas, entre otros.
        </p>
      </article>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    items: markdownRemark {
      frontmatter {
        productos {
          path
          nombre
          precio
        }
      }
    }
  }
`