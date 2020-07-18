import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PaginationContainer = styled.section`
  align-items: center;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;

  @media ${props => props.theme.mediaQueries.lg} {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
    padding: 1rem;
  }
`

export const PaginationLink = styled(AniLink)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: var(--secondary);
  }
`

export const PaginationText = styled.p``
