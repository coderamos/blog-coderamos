import styled from 'styled-components'

export const CommentsContainer = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 0 3rem;

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--secondary) !important;
    }
  }

  @media ${props => props.theme.mediaQueries.lg} {
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  }
`

export const CommentsTitle = styled.h2`
  color: var(--text);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;

  @media ${props => props.theme.mediaQueries.lg} {
    font-size: 1.375rem;
  }
`
