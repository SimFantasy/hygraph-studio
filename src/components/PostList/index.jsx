import React, { memo } from 'react'
import { PostItem, Pagination, Spin } from '@/components'
import { PostListWrap } from './style'

const PostList = ({ data, showCover, loading, currentPage, setCurrentPage, limit }) => {
  if (loading)
    return (
      <PostListWrap>
        <div className='page-card'>
          <div className='post-list-container'>
            <Spin />
          </div>
        </div>
      </PostListWrap>
    )
  return (
    <PostListWrap>
      <div className='page-card'>
        <div className='post-list-container'>
          {data?.postsConnection?.edges?.map(post => (
            <PostItem key={post?.node?.slug} {...post?.node} showCover={showCover} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasPreviousPage={data?.postsConnection?.pageInfo?.hasPreviousPage}
        hasNextPage={data?.postsConnection?.pageInfo?.hasNextPage}
        count={data?.postsConnection?.aggregate?.count}
        limit={limit}
      />
    </PostListWrap>
  )
}

export default memo(PostList)
