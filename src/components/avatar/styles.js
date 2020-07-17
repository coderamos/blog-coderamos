import styled from 'styled-components'
import Img from 'gatsby-image'

export const AvatarContainer = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;

  @media ${props => props.theme.mediaQueries.lg} {
    width: 1.875rem;
    height: 1.875rem;
  }
`
