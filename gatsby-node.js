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
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            fields {
              postURL
            }
            frontmatter {
              tagColor
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.postURL,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          postURL: node.fields.postURL,
        },
      })
    })

    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/' : `/page/${index + 1}`,
        component: path.resolve('./src/templates/blogList.js'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
