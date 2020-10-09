import React from 'react'

import links from './content'
import Icons from './icons'

import * as s from './styles'

const SocialLinks = () => (
  <s.SocialLinksContainer>
    <s.SocialLinksList>
      {links.map((link, index) => {
        const Icon = Icons[link.label]
        return (
          // eslint-disable-next-line react/no-array-index-key
          <s.SocialLinksItem key={index}>
            <s.SocialLinksLink
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
              title={link.label}
            >
              <s.IconWrapper>
                <div>
                  <Icon />
                </div>
              </s.IconWrapper>
            </s.SocialLinksLink>
          </s.SocialLinksItem>
        )
      })}
    </s.SocialLinksList>
  </s.SocialLinksContainer>
)

export default SocialLinks
