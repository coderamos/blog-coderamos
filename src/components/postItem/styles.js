import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PostItemLink = styled(AniLink)`
  color: var(--text);
  display: flex;
  text-decoration: none;

  &:hover {
    color: var(--secondary);
  }

  body#grid & {
    background-color: var(--primary);
    min-height: 100%;
  }
`

export const PostItemContainer = styled.section`
  align-items: flex-start;
  border-bottom: 1px solid var(--secondary);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;

  body#grid & {
    border: none;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;
  }

  @media ${props => props.theme.mediaQueries.lg} {
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  }
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props =>
    props.tagColor ? props.tagColor : 'var(--secondary)'};
  color: var(--text);
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 0.7rem;
  min-height: auto;
  min-width: auto;
  padding: 0.2rem 0.5rem;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }

  @media ${props => props.theme.mediaQueries.lg} {
    border-radius: 0;
    font-size: 1rem;
    margin-bottom: 0.7rem;
    min-height: auto;
    min-width: auto;
    padding: 0.2rem 0.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.mediaQueries.lg} {
    margin: 0;
  }
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
