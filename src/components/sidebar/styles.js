import styled from 'styled-components'

export const SideBarContainer = styled.aside`
  align-items: center;
  background: var(--primary);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  position: fixed;
  text-align: center;
  transition: background 0.4s;
  width: 20rem;

  @media ${props => props.theme.mediaQueries.lg} {
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  }
`
