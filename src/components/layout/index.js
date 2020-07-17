import React from 'react'
import PropTypes from 'prop-types'
import * as s from './styles'
import Sidebar from '../sidebar'
import MenuBar from '../menuBar'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../../styles'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

const Layout = ({ children }) => {
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
