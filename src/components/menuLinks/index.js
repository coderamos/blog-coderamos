import React from 'react'
import * as s from './styles'
import links from './content'

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
              direction="left"
              bg="#112233"
              duration={0.6}
            >
              {link.label}
            </s.MenuLinksLink>
          </s.MenuLinksItem>
        ))}
      </s.MenuLinksList>
    </s.MenuLinksContainer>
  )
}

export default MenuLinks
