import React from 'react'

import Profile from '../profile'
import SocialLinks from '../socialLinks'

import * as s from './styles'

const Sidebar = () => {
  return (
    <s.SideBarContainer>
      <Profile />
      <SocialLinks />
    </s.SideBarContainer>
  )
}

export default Sidebar
