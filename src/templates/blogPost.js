import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query Post($postURL: String!) {
    markdownRemark(fields: { postURL: { eq: $postURL } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export default BlogPost
