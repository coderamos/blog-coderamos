import styled from 'styled-components'

export const SocialLinksContainer = styled.nav`
  @media ${props => props.theme.mediaQueries.lg} {
  }
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  padding: 0 2rem;

  @media ${props => props.theme.mediaQueries.lg} {
    padding: 0;

    & + li {
      margin-left: 1rem;
    }
  }
`

export const SocialLinksLink = styled.a`
  color: var(--text);
  text-decoration: none;
  transition: color 0.4s;
  /* padding: 0.2rem; */

  &:hover {
    color: var(--secondary);
  }
`

export const IconWrapper = styled.div`
  height: 30px;
  width: 30px;
`
