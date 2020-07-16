import React from 'react'
import * as s from './styles'
import PropTypes from 'prop-types'

import ReactDisqusComments from 'react-disqus-comments'

const Comments = ({ postURL, title }) => {
  const completeURL = `https://coderamos.com.br${postURL}`
  return (
    <s.CommentsContainer>
      <s.CommentsTitle>Comentários</s.CommentsTitle>
      <ReactDisqusComments
        shortname="coderamos"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </s.CommentsContainer>
  )
}

Comments.propTypes = {
  postURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default Comments
