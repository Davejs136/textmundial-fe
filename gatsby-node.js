const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const productoTemplate = path.resolve(`src/templates/producto.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {ne: null }}}) {
        edges {
          node {
            frontmatter {
              path
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
      path: node.frontmatter.path,
      component: productoTemplate,
      context: {},
    })
  })
}
