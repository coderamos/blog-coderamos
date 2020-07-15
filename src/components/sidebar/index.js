import React from 'react'
import * as s from './styles'
import Profile from '../profile'
import SocialLinks from '../socialLinks'

const Sidebar = () => {
  return (
    <s.SideBarContainer>
      <Profile />
      <SocialLinks />
    </s.SideBarContainer>
  )
}

export default Sidebar
