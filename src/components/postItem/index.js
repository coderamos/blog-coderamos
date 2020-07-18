import React from 'react'
import PropTypes from 'prop-types'
import * as s from './styles'
import getThemeColor from '../../utils/getThemeColor'

const PostItem = ({
  postURL,
  tagColor,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  return (
    <s.PostItemLink
      to={postURL}
      cover
      bg={getThemeColor()}
      direction="up"
      duration={0.6}
    >
      <s.PostItemContainer>
        <s.PostItemTag tagColor={tagColor}>{category}</s.PostItemTag>
        <s.PostItemInfo>
          <s.PostItemDate>
            {date} &middot; {timeToRead} min
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
  tagColor: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
