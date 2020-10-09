import styled from 'styled-components'

export const SocialLinksContainer = styled.nav`
  @media ${props => props.theme.mediaQueries.lg} {
    margin-right: 2rem;
  }
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  
  
`

export const SocialLinksItem = styled.li`

  @media ${props => props.theme.mediaQueries.lg} {
    padding: 0;

    &:first-child {
      padding-top: 0.2rem;
    }

    & + li {
      margin-left: 1rem;
    }
  }
`

export const SocialLinksLink = styled.a`
  color: var(--text);
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: var(--secondary);
  }
`

export const IconWrapper = styled.div`
  display: flex;
  > div {
    width: 30px;
  }

  @media ${props => props.theme.mediaQueries.lg} {
    height: 24px;
    width: 24px;
  }
`
