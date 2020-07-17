import React from 'react'
import * as s from './styles'
import PropTypes from 'prop-types'

const RecommendedPosts = ({ next, previous }) => {
  return (
    <s.RecommendedPostsContainer>
      {previous && (
        <s.RecommendedPostLink
          to={previous.fields.postURL}
          className="previous"
          cover
          direction="left"
          bg="#112233"
          duration={0.6}
        >
          {previous.frontmatter.title}
        </s.RecommendedPostLink>
      )}
      {next && (
        <s.RecommendedPostLink
          to={next.fields.postURL}
          className="next"
          cover
          direction="right"
          bg="#112233"
          duration={0.6}
        >
          {next.frontmatter.title}
        </s.RecommendedPostLink>
      )}
    </s.RecommendedPostsContainer>
  )
}

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      postURL: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      postURL: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
