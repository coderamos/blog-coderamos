import React from 'react'
import * as s from './styles'

const MenuBar = () => {
  return (
    <s.MenuBarContainer>
      <s.MenuBarWrapper>
        <s.MenuBarLink to="/" title="home">
          <s.MenuBarItem>
            <s.HomeIcon />
          </s.MenuBarItem>
        </s.MenuBarLink>
        <s.MenuBarLink to="/search/" title="search">
          <s.MenuBarItem>
            <s.SearchIcon />
          </s.MenuBarItem>
        </s.MenuBarLink>
      </s.MenuBarWrapper>

      <s.MenuBarWrapper>
        <s.MenuBarItem title="theme">
          <s.MoonIcon />
        </s.MenuBarItem>
        <s.MenuBarItem title="grid">
          <s.GridIcon />
        </s.MenuBarItem>
        <s.MenuBarItem title="top">
          <s.ArrowUpIcon />
        </s.MenuBarItem>
      </s.MenuBarWrapper>
    </s.MenuBarContainer>
  )
}

export default MenuBar
