import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as s from './styles'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-avatar.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <s.AvatarContainer fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
