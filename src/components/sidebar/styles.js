import styled from 'styled-components'

export const SideBarContainer = styled.aside`
  display: flex;
  align-items: center;
  background: var(--primary);
  padding: 0.5rem 21rem;
  justify-content: space-between;
  transition: background 0.4s;
  box-shadow: 0 6px 6px -6px var(--black);

  width: 100vw;
  height: 3rem;

  @media ${props => props.theme.mediaQueries.lg} {
    padding: 0.5rem 1rem;
  }
`
