import React from 'react'
import PropTypes from 'prop-types'
import * as s from './styles'
import Sidebar from '../sidebar'
import MenuBar from '../menuBar'
import { GlobalStyle } from '../../styles'

const Layout = ({ children }) => {
  return (
    <s.LayoutContainer>
      <GlobalStyle />
      <Sidebar />
      <s.LayoutContent>{children}</s.LayoutContent>
      <MenuBar />
    </s.LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
