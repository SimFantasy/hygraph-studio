import React from 'react'
import { RiCalendarTodoLine, RiFolder3Line } from 'react-icons/ri'
import { MarkdownContent, Spin } from '@/components'
import { usePostQuery } from '@/hooks'
import { fullDateFormat } from '@/utils'
import { PostWrap } from './style'

const Post = () => {
  const { data, loading } = usePostQuery()
  if (loading)
    return (
      <PostWrap>
        <div className='container post-container'>
          <div className='page-card'>
            <Spin />
          </div>
        </div>
      </PostWrap>
    )

  const { cover, title, createdAt, postCategories, content, tags } = data.post
  return (
    <PostWrap>
      <div className='container post-container'>
        <div className='page-card'>
          {cover && (
            <div className='post-cover'>
              <img src={cover} />
            </div>
          )}

          <div className='post-title'>{title}</div>
          <div className='post-info'>
            <div className='info-item'>
              <RiCalendarTodoLine />
              {fullDateFormat(createdAt)}
            </div>
            <div className='info-item'>
              <RiFolder3Line />
              {postCategories[0]?.name}
            </div>
          </div>
          <div className='post-content'>
            <MarkdownContent source={content} />
          </div>
          <div className='post-tags'>
            {tags?.map((tag, index) => (
              <div className='tag-item' key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PostWrap>
  )
}

export default Post
