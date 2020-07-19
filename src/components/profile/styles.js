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
  /* align-items: center; */

  &:hover {
    color: var(--secondary);
  }

  @media ${props => props.theme.mediaQueries.lg} {
    /* display: flex; */
    /* text-align: left; */
  }
`

export const ProfileAuthor = styled.h1`
  padding-left: 0.75rem;
  display: flex;
  align-items: center;

  @media ${props => props.theme.mediaQueries.lg} {
    /* font-size: 1.2rem; */
    /* margin: 0 0 0 10px; */
  }
`

export const ProfileName = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;

  @media ${props => props.theme.mediaQueries.lg} {
    font-size: 0.8rem;
  }
`

export const ProfilePosition = styled.span`
  font-weight: 300;

  @media ${props => props.theme.mediaQueries.lg} {
    font-size: 0.8rem;
    /* margin-top: 0.2rem; */
  }
`

export const ProfileDescription = styled.p`
  /* font-size: 1rem; */
  /* font-weight: 300; */
  /* line-height: 1.4; */

  @media ${props => props.theme.mediaQueries.lg} {
    display: none;
  }
`
