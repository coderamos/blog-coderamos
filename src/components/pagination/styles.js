import styled from 'styled-components'
import { Link } from 'gatsby'

export const PaginationContainer = styled.section`
  align-items: center;
  color: ${props => props.theme.colors.dark.text};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`

export const PaginationLink = styled(Link)`
  color: ${props => props.theme.colors.dark.text};
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.dark.secondary};
  }
`

export const PaginationText = styled.p``
