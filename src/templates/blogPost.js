import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import * as s from '../components/post/styles'

export const query = graphql`
  query Post($postURL: String!) {
    markdownRemark(fields: { postURL: { eq: $postURL } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        category
        tagColor
      }
      html
      timeToRead
    }
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <s.PostHeader>
        <s.PostDate>
          {post.frontmatter.date} &middot; Leitura de {post.timeToRead} min
        </s.PostDate>
        <s.PostTitle>{post.frontmatter.title}</s.PostTitle>
        <s.PostDescription>{post.frontmatter.description}</s.PostDescription>
      </s.PostHeader>
      <s.PostContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </s.PostContent>
    </Layout>
  )
}

export default BlogPost
