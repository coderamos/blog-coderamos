import React from 'react'
import PropTypes from 'prop-types'
import * as s from './styles'
import Sidebar from '../sidebar'

const Layout = ({ children }) => {
  return (
    <s.LayoutContainer>
      <Sidebar />
      <s.LayoutContent>{children}</s.LayoutContent>
    </s.LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
