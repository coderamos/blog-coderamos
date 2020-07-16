import React from 'react'
import PropTypes from 'prop-types'

import * as s from './styles'

const PostItem = ({
  postURL,
  postTagColor,
  postCategory,
  postDate,
  timeToRead,
  postTitle,
  postDescription,
}) => {
  return (
    <s.PostItemLink to={postURL}>
      <s.PostItemContainer>
        <s.PostItemTag postTagColor={postTagColor}>
          {postCategory}
        </s.PostItemTag>
        <s.PostItemInfo>
          <s.PostItemDate>
            {postDate} &middot; {timeToRead} min
          </s.PostItemDate>
          <s.PostItemTitle>{postTitle}</s.PostItemTitle>
          <s.PostItemDescription>{postDescription}</s.PostItemDescription>
        </s.PostItemInfo>
      </s.PostItemContainer>
    </s.PostItemLink>
  )
}

PostItem.propTypes = {
  postURL: PropTypes.string.isRequired,
  postTagColor: PropTypes.string,
  postCategory: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
}

export default PostItem
