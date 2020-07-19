import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const MenuLinksContainer = styled.nav`
  display: flex;
  justify-content: center;

  @media ${props => props.theme.mediaQueries.lg} {
    display: none;
  }
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  text-align: right;

  .active {
    color: var(--secondary);
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: var(--secondary);
  }
`
