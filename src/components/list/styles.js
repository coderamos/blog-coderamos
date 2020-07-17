import styled from 'styled-components'

export const ListContainer = styled.section`
  body#grid & {
    grid-area: POSTS;

    background-color: var(--secondary);
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`
