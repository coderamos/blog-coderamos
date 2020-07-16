import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostItem from '../components/postItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      postURL="/about/"
      backgroundColor="green"
      category="GIT"
      date="July 18, 2020"
      timeToRead="5"
      title="O BÁSICO SOBRE O GIT"
      description="aprenda a usar o git em 3 minutos"
    />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </Layout>
)

export default IndexPage
