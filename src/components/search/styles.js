import styled from 'styled-components'

export const SearchContainer = styled.section`
  background: var(--primary);
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

    @media ${props => props.theme.mediaQueries.lg} {
      padding: 1rem;
    }
  }

  .ais-Stats {
    color: var(--secondary);

    @media ${props => props.theme.mediaQueries.lg} {
      padding: 0.5rem 1rem;
    }
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--secondary);
    color: var(--secondary);
    display: flex;
    font-size: 1.6rem;
    outline: 0;
    padding: 0.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  body#grid & {
    .ais-Hits-list {
      background-color: var(--secondary);
      border-bottom: 1px solid var(--border);
      border-top: 1px solid var(--border);
      display: grid;
      grid-area: POSTS;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      margin-top: 2rem;
    }
  }
`
