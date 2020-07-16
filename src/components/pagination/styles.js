import styled from 'styled-components'
import { Link } from 'gatsby'

export const PaginationContainer = styled.section`
  align-items: center;
  border-top: 1px solid red;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`

export const PaginationLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.green};
  }
`

export const PaginationText = styled.p``
