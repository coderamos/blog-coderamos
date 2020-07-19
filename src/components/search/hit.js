import React from 'react'
import PostItem from '../postItem'

const Hit = ({ hit }) => {
  console.log(hit)
  return (
    <PostItem
      category={hit.category}
      date={hit.date}
      description={hit.description}
      postURL={hit.fields.postURL}
      tagColor={hit.tagColor}
      title={hit.title}
    />
  )
}

export default Hit
