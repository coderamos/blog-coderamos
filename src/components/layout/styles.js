import styled from 'styled-components'

export const LayoutContainer = styled.section`
  display: flex;
`

export const LayoutContent = styled.main`
  background: ${props => props.theme.colors.dark.primary};
  min-height: 100vh;
  padding: 0 3.75rem 0 24rem;
  width: 100%;
`
