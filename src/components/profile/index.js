import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../avatar'
import * as s from './styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <s.ProfileContainer className="profileWrapper">
      <s.ProfileLink to="/" cover direction="left" bg="#112233" duration={0.6}>
        <Avatar />
        <s.ProfileAuthor>
          {title}
          <s.ProfilePosition>{position}</s.ProfilePosition>
        </s.ProfileAuthor>
      </s.ProfileLink>
      <s.ProfileDescription>{description}</s.ProfileDescription>
    </s.ProfileContainer>
  )
}

export default Profile
