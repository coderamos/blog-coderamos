/* eslint-disable react/prop-types */
import React from 'react'

import { graphql } from 'gatsby'

import Comments from '../components/comments'
import Layout from '../components/layout'
import RecommendedPosts from '../components/recommendedPosts'
import SEO from '../components/seo'

import * as s from '../components/post/styles'

export const query = graphql`
  query Post($postURL: String!) {
    markdownRemark(fields: { postURL: { eq: $postURL } }) {
      fields {
        postURL
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        category
        tagColor
        image
      }
      html
      timeToRead
    }
  }
`

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { nextPost, previousPost } = pageContext
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <s.PostHeader>
        <s.PostDate>
          {post.frontmatter.date} &middot; Leitura de {post.timeToRead} min
        </s.PostDate>
        <s.PostTitle>{post.frontmatter.title}</s.PostTitle>
        <s.PostDescription>{post.frontmatter.description}</s.PostDescription>
      </s.PostHeader>
      <s.PostContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </s.PostContent>
      <RecommendedPosts next={nextPost} previous={previousPost} />
      <Comments postURL={post.fields.postURL} title={post.frontmatter.title} />
    </Layout>
  )
}

export default BlogPost
