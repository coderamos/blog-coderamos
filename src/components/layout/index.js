import React, { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { TransitionPortal } from 'gatsby-plugin-transition-link'

import PropTypes from 'prop-types'

import MenuBar from '../menuBar'
import Sidebar from '../sidebar'

import { GlobalStyle, theme } from '../../styles'
import * as s from './styles'

const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <s.LayoutContainer>
        <TransitionPortal level="top">
          <Sidebar />
        </TransitionPortal>
        <s.LayoutContent>{children}</s.LayoutContent>
        <TransitionPortal level="top">
          <MenuBar />
        </TransitionPortal>
      </s.LayoutContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
