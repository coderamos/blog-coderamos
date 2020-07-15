import React from 'react'
import PropTypes from 'prop-types'

import { LayoutContainer, LayoutContent } from './styles'
import Profile from '../profile'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <aside>
        <Profile />
      </aside>
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
