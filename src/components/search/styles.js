import styled from 'styled-components'

export const SearchContainer = styled.section`
  background: ${props => props.theme.colors.dark.primary};
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }

  .ais-SearchBox {
    padding-top: 2rem;
  }

  .ais-Stats {
    color: ${props => props.theme.colors.dark.secondary};
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.dark.secondary};
    color: ${props => props.theme.colors.dark.secondary};
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;

    &::placeholder {
      color: ${props => props.theme.colors.dark.white};
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
