const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const productoTemplate = path.resolve(
    `src/pages/productos/producto.template.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___id] }) {
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

  if (result.errors) {
    reporter.panicOnBuild(`Error while running Graphql query`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `productos/${node.frontmatter.slug}`,
      component: productoTemplate,
      context: {
        // additional data can be passed via context
        id: node.frontmatter.id,
      },
    })
  })
}
