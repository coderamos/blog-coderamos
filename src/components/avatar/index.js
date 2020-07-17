import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as s from './styles'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <s.AvatarContainer fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar
