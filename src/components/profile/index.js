import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import getThemeColor from '../../utils/getThemeColor'
import Avatar from '../avatar'

import * as s from './styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: { position },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          position
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
        {/* <Avatar /> */}
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
