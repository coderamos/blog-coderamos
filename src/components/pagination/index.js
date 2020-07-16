import React from 'react'
import PropTypes from 'prop-types'
import * as s from './styles'

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  return (
    <s.PaginationContainer>
      {!isFirstPage && <s.PaginationLink to={prevPage}>prev</s.PaginationLink>}
      <s.PaginationText>
        {currentPage} | {numPages}
      </s.PaginationText>
      {!isLastPage && <s.PaginationLink to={nextPage}>next</s.PaginationLink>}
    </s.PaginationContainer>
  )
}

Pagination.propTypes = {
  isFirstPage: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
