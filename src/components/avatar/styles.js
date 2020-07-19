import styled from 'styled-components'

import Img from 'gatsby-image'

export const AvatarContainer = styled(Img)`
  border-radius: 10%;
  height: 2rem;
  margin: auto;
  width: 2rem;
  flex-shrink: 0;

  @media ${props => props.theme.mediaQueries.lg} {
    width: 1.875rem;
    height: 1.875rem;
  }
`
