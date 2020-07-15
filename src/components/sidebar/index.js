import React from 'react'
import * as s from './styles'
import Profile from '../profile'
import SocialLinks from '../socialLinks'
import MenuLinks from '../menuLinks'

const Sidebar = () => {
  return (
    <s.SideBarContainer>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </s.SideBarContainer>
  )
}

export default Sidebar
