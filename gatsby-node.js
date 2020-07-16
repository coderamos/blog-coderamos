const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

// add postURL to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const postURL = createFilePath({
      node,
      getNode,
      basePath: 'pages/',
    })

    createNodeField({
      node,
      name: 'postURL',
      value: `/${postURL.slice(12)}`,
    })
  }
}

// create page to each post
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              postURL
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.postURL,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          postURL: node.fields.postURL,
        },
      })
    })
  })
}
