import styled from 'styled-components'

export const LayoutContainer = styled.section`
  display: flex;

  @media ${props => props.theme.mediaQueries.lg} {
    flex-direction: column;
  }
`

export const LayoutContent = styled.main`
  background: var(--primary);
  min-height: 100vh;
  padding: 3rem 20rem 0;
  transition: background 0.4s;
  width: 100%;

  body#grid & {
    grid-template-areas: 'POSTS' 'PAGINATION';
  }

  @media ${props => props.theme.mediaQueries.lg} {
    padding: 3rem 0 3rem 0;
  }
`
