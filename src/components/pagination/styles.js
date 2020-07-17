import styled from 'styled-components'
import { Link } from 'gatsby'

export const PaginationContainer = styled.section`
  align-items: center;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`

export const PaginationLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: var(--secondary);
  }
`

export const PaginationText = styled.p``
