/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import HeaderInternal from "./headerInternal"
import Footer from "./footer"

const LayoutInternal = ({ children }) => (
  <div className="container">
    <HeaderInternal />
    <main>{children}</main>
    <Footer />
  </div>
)

LayoutInternal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutInternal
