import styled from 'styled-components'

export const LayoutContainer = styled.section`
  display: flex;
`

export const LayoutContent = styled.main`
  background: ${props => props.theme.colors.black};
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`
