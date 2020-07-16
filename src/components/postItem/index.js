import React from 'react'
import PropTypes from 'prop-types'

import * as s from './styles'

const PostItem = ({
  postURL,
  backgroundColor,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  return (
    <s.PostItemLink to={postURL}>
      <s.PostItemContainer>
        <s.PostItemTag background={backgroundColor}>{category}</s.PostItemTag>
        <s.PostItemInfo>
          <s.PostItemDate>
            {date} &middot; {timeToRead}
          </s.PostItemDate>
          <s.PostItemTitle>{title}</s.PostItemTitle>
          <s.PostItemDescription>{description}</s.PostItemDescription>
        </s.PostItemInfo>
      </s.PostItemContainer>
    </s.PostItemLink>
  )
}

PostItem.propTypes = {
  postURL: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
