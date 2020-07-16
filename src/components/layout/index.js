import React from 'react'
import PropTypes from 'prop-types'
import * as s from './styles'
import Sidebar from '../sidebar'
import MenuBar from '../menuBar'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../../styles'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <s.LayoutContainer>
        <Sidebar />
        <s.LayoutContent>{children}</s.LayoutContent>
        <MenuBar />
      </s.LayoutContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
