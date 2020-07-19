import React from 'react'

import getThemeColor from '../../utils/getThemeColor'
import links from './content'

import * as s from './styles'

const MenuLinks = () => {
  return (
    <s.MenuLinksContainer>
      <s.MenuLinksList>
        {links.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <s.MenuLinksItem key={index}>
            <s.MenuLinksLink
              to={link.url}
              activeClassName="active"
              cover
              bg={getThemeColor()}
              direction="up"
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
