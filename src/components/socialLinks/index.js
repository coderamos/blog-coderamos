import React from 'react'

import Icons from './icons'
import links from './content'

import * as s from './styles'

const SocialLinks = () => (
  <s.SocialLinksContainer>
    <s.SocialLinksList>
      {links.map((link, index) => {
        const Icon = Icons[link.label]

        return (
          <s.SocialLinksItem key={index}>
            <s.SocialLinksLink
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
              title={link.label}
            >
              <s.IconWrapper>
                <Icon />
              </s.IconWrapper>
            </s.SocialLinksLink>
          </s.SocialLinksItem>
        )
      })}
    </s.SocialLinksList>
  </s.SocialLinksContainer>
)

export default SocialLinks
