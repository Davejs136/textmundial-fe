const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Template productos
  const productoTemplate = path.resolve(
    `src/pages/productos/producto.template.js`
  )

  const resultProduct = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { tipo: { eq: "producto" } } }
        sort: { order: ASC, fields: [frontmatter___id] }
      ) {
        edges {
          node {
            frontmatter {
              id
              slug
            }
          }
        }
      }
    }
  `)

  if (resultProduct.errors) {
    reporter.panicOnBuild(`Error while running Graphql query`)
    return
  }

  resultProduct.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `productos/${node.frontmatter.slug}`,
      component: productoTemplate,
      context: {
        // additional data can be passed via context
        id: node.frontmatter.id,
      },
    })
  })

  // Template articulos
  const articuloTemplate = path.resolve(`src/pages/blog/articulo.template.js`)

  const resultArticle = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___fecha] }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (resultArticle.errors) {
    reporter.panicOnBuild(`Error while running Graphql query`)
    return
  }

  resultArticle.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: articuloTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
