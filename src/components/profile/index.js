import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../avatar'
import * as s from './styles'
import getThemeColor from '../../utils/getThemeColor'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          position
          description
        }
      }
    }
  `)

  return (
    <s.ProfileContainer className="profileWrapper">
      <s.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <s.ProfileAuthor>
          <s.ProfileName>
            Diego Ramos <s.ProfilePosition>| {position}</s.ProfilePosition>
          </s.ProfileName>
        </s.ProfileAuthor>
      </s.ProfileLink>
    </s.ProfileContainer>
  )
}

export default Profile
