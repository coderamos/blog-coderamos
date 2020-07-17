import styled from 'styled-components'

export const SocialLinksContainer = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: ${props => props.theme.colors.dark.text};
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.dark.secondary};
  }
`

export const IconWrapper = styled.div`
  height: 30px;
  width: 30px;
`
