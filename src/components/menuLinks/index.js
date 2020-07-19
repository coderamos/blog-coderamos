import React from 'react'
import * as s from './styles'
import links from './content'
import getThemeColor from '../../utils/getThemeColor'

const MenuLinks = () => {
  return (
    <s.MenuLinksContainer>
      <s.MenuLinksList>
        {links.map((link, index) => (
          <s.MenuLinksItem key={index}>
            <s.MenuLinksLink
              to={link.url}
              activeClassName="active"
              cover
              bg={getThemeColor()}
              direction="left"
              duration={0.6}
            >
              {link.label.toUpperCase()}
            </s.MenuLinksLink>
          </s.MenuLinksItem>
        ))}
      </s.MenuLinksList>
    </s.MenuLinksContainer>
  )
}

export default MenuLinks
