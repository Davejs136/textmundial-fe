import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import prodefault from "../../assets/images/pro-default.jpg"

const Productos = () => (
  <Layout>
    <section className="productos">
      <h1>default</h1>
      <h2>Productos</h2>
      <ul className="productos__lista">
        <li className="productos__items">
          <div className="productos__imagen gatsby-image-wrapper">
            <img src={prodefault} alt="productos" />
          </div>
          <h3 className="productos__nombre">Lorem ipsum</h3>
          <Link className="productos__vermas" to="/productos">Ver producto</Link>
        </li>
        <li className="productos__items">
        <div className="productos__imagen gatsby-image-wrapper">
            <img src={prodefault} alt="productos" />
          </div>
          <h3 className="productos__nombre">Sed ut perspiciatis</h3>
          <Link className="productos__vermas" to="/productos">Ver producto</Link>
        </li>
        <li className="productos__items">
        <div className="productos__imagen gatsby-image-wrapper">
            <img src={prodefault} alt="productos" />
          </div>
          <h3 className="productos__nombre">Ut enim ad minima</h3>
          <Link className="productos__vermas" to="/productos">Ver producto</Link>
        </li>
      </ul>
      <div className="productos__paginacion">
        <div className="productos__anterior">«</div>
        <ul className="productos__numeros">
          <li className="productos__pagina">1</li>
          <li className="productos__pagina">2</li>
          <li className="productos__pagina">3</li>
          <li className="productos__pagina">4</li>
          <li className="productos__pagina">5</li>
          <li className="productos__pagina">6</li>
        </ul>
        <div className="productos__siguiente">»</div>
      </div>
    </section>
  </Layout>
)

export default Productos

// export const query =
