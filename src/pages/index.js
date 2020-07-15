import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../styles'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </Layout>
    <GlobalStyle />
  </ThemeProvider>
)

export default IndexPage
