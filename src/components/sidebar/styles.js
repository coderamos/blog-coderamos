import styled from 'styled-components'

export const SideBarContainer = styled.aside`
  display: flex;
  align-items: center;
  background: var(--primary);
  padding: 0.5rem 2rem;
  justify-content: space-around;
  transition: background 0.4s;

  width: 100vw;
  height: 2rem;

  @media ${props => props.theme.mediaQueries.lg} {
    padding: 0.5rem 0;
  }
`
