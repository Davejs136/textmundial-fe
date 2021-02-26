import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Principal from "../components/principal"
import Productos from "../components/productos"
import Blog from "../components/blog"
import Mapa from "../components/mapa"
import Nosotros from "../components/nosotros"
import Formulario from "../components/formulario"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Texmundial - Distribuidores de telas para trajes de baño."
      description="Somos una empresa con más de 27 años en el mercado, conocidos por la excelente calidad de nuestras telas."
      image="http://gruponovanet.com.ve/misc/tm-site-thumb.jpg"
    />

    <Principal />

    <Productos />

    <Blog />

    <Mapa />

    <Nosotros />

    <Formulario />
  </Layout>
)

export default IndexPage
