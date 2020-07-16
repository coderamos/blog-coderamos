import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostItem from '../components/postItem'

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
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
`

const BlogPost = props => {
  const postList = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            fields: { postURL },
            frontmatter: { tagColor, category, date, description, title },
            timeToRead,
          },
        }) => (
          <PostItem
            postURL={postURL}
            tagColor={tagColor}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default BlogPost
