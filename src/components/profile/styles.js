import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProfileContainer = styled.section`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.greenBright};
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
