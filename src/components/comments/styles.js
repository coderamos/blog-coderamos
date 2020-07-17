import styled from 'styled-components'

export const CommentsContainer = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: ${props => props.theme.colors.dark.secondary} !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: ${props => props.theme.colors.dark.text};
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`
