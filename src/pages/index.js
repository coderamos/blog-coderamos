import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostItem from '../components/postItem'

import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              postTagColor
              postCategory
              postDate(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              postDescription
              postTitle
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: {
              postTagColor,
              postCategory,
              postDate,
              postDescription,
              postTitle,
            },
            timeToRead,
          },
        }) => (
          <PostItem
            postURL="/about/"
            postTagColor={postTagColor}
            postCategory={postCategory}
            postDate={postDate}
            timeToRead={timeToRead}
            postTitle={postTitle}
            postDescription={postDescription}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
