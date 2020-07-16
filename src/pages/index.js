import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostItem from '../components/postItem'

import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
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
  `)

  const postList = allMarkdownRemark.edges

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

export default IndexPage
