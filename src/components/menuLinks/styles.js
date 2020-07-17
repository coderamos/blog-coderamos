import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksContainer = styled.nav`
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

  .active {
    color: var(--secondary);
  }
`

export const MenuLinksLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: var(--secondary);
  }
`
