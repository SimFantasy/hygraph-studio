import React, { memo, useCallback } from 'react'
import { PaginationWrap } from './style'

const Pagination = ({
  currentPage,
  setCurrentPage,
  hasPreviousPage,
  hasNextPage,
  count,
  limit
}) => {
  const totalPage = Number(Math.ceil(count / limit))
  const handlePrevPagination = useCallback(() => {
    if (hasPreviousPage) {
      setCurrentPage(currentPage - 1)
    }
  })

  const handleNextPagination = useCallback(() => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1)
    }
  })

  return count > limit ? (
    <PaginationWrap>
      <div className='pagination-info'>
        {currentPage} of {totalPage}
      </div>
      <div className='pagination-btns'>
        <button
          className='pagination-btn prev'
          onClick={handlePrevPagination}
          disabled={!hasPreviousPage}
        >
          Previous
        </button>
        <button
          className='pagination-btn next'
          onClick={handleNextPagination}
          disabled={!hasNextPage}
        >
          Next
        </button>
      </div>
    </PaginationWrap>
  ) : null
}

export default memo(Pagination)
