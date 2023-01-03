import React, { memo } from 'react'
import { SnippetItem, Pagination, Spin } from '@/components'
import { SnippetListWrap } from './style'

const SnippetList = ({ data, loading, currentPage, setCurrentPage, limit }) => {
  if (loading)
    return (
      <SnippetListWrap>
        <div className='snippet-list-container'>
          <Spin />
        </div>
      </SnippetListWrap>
    )
  return (
    <SnippetListWrap>
      <div className='snippet-list-container'>
        {data?.snippetsConnection?.edges?.map(snippet => (
          <div className='page-card' key={snippet?.node?.slug}>
            <SnippetItem {...snippet?.node} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasPreviousPage={data?.snippetsConnection?.pageInfo?.hasPreviousPage}
        hasNextPage={data?.snippetsConnection?.pageInfo?.hasNextPage}
        count={data?.snippetsConnection?.aggregate?.count}
        limit={limit}
      />
    </SnippetListWrap>
  )
}

export default memo(SnippetList)
