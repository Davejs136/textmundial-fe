const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const productoTemplate = path.resolve(`src/pages/productos/producto.template.js`)

  const result = await graphql(`
    {
      markdownRemark {
        frontmatter {
          productos {
            path
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running Graphql query`)
    return
  }

  console.log(result)

  result.data.markdownRemark.frontmatter.productos.forEach(producto => {
    createPage({
      path: producto.path,
      component: productoTemplate,
      context: {
        id: producto.id
      },
    })
  })
}
