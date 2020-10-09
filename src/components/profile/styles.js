import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const ProfileContainer = styled.section`
  color: var(--text);
`

export const ProfileLink = styled(AniLink)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.4s;
  display: flex;

  &:hover {
    color: var(--secondary);
  }

  @media ${props => props.theme.mediaQueries.lg} {
  }
`

export const ProfileAuthor = styled.h1`
  display: flex;
  align-items: center;
`

export const ProfileName = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;

  @media ${props => props.theme.mediaQueries.lg} {
    font-size: 0.875rem;
  }
`

export const ProfilePosition = styled.span`
  font-weight: 300;

  @media ${props => props.theme.mediaQueries.lg} {
    font-size: 0.875rem;
  }
`

export const ProfileDescription = styled.p`
  @media ${props => props.theme.mediaQueries.lg} {
    display: none;
  }
`
