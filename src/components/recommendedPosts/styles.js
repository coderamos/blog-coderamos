import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const RecommendedPostsContainer = styled.section`
  background: var(--primary);
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);
  bottom: 0;
  display: flex;
  left: 24rem;
`

export const RecommendedPostLink = styled(AniLink)`
  align-items: center;
  background: var(--primary);
  color: var(--secondary);
  display: flex;
  padding: 2rem;
  text-decoration: none;
  transition: background 0.4s;
  width: 50%;

  &:hover {
    color: var(--secondary);
  }

  &.previous {
    border-right: 1px solid var(--border);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }

  @media ${props => props.theme.mediaQueries.lg} {
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: 0.9rem;
  }
`
