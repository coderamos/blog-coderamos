import styled from 'styled-components'

export const SideBarContainer = styled.aside`
  align-items: center;
  background: ${props => props.theme.colors.black};
  border-right: 1px solid ${props => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  position: fixed;
  text-align: center;
  width: 20rem;
`
