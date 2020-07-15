import styled from 'styled-components'
import { Link } from 'gatsby'
export const MenuLinksContainer = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: ${props => props.theme.colors.greenBright};
  }
`

export const MenuLinksLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.greenBright};
  }
`
