import React, { useState, useEffect } from 'react'
import { ListTitlebar, PostList } from '@/components'
import { usePostCategoriesQuery, usePostsQuery } from '@/hooks'
import { postsListLimit } from '@/constants/config'
import { PostsWrap } from './style'

const Posts = () => {
  const [currentNav, setCurrentNav] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [currentNav])

  const { data: categoriesData } = usePostCategoriesQuery()
  const { data: postsData, loading: postsLoading } = usePostsQuery(currentPage, currentNav)

  return (
    <PostsWrap>
      <div className='container post-container'>
        <ListTitlebar
          title='Posts'
          navs={categoriesData?.postCategories}
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
        />
        <PostList
          data={postsData}
          loading={postsLoading}
          showCover={false}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          limit={postsListLimit}
        />
      </div>
    </PostsWrap>
  )
}

export default Posts
