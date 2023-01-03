import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiCalendarTodoLine, RiFolder3Line, RiPriceTag3Line } from 'react-icons/ri'
import { dateNowFormat } from '@/utils'
import { PostItemWrap } from './style'

const PostItem = ({
  showCover,
  title,
  cover,
  postCategories,
  createdAt,
  slug,
  description,
  tags
}) => {
  return (
    <PostItemWrap>
      <div className='post-item-container'>
        {showCover ? (
          <Link to={`/post/${slug}`} className='post-item-cover'>
            <img src={cover} />
          </Link>
        ) : null}
        <div className='post-item-mainview'>
          <Link to={`/post/${slug}`} className='post-item-title'>
            {title}
          </Link>
          <div className='post-item-info'>
            <div className='info-item'>
              <RiCalendarTodoLine />
              {dateNowFormat(createdAt)}
            </div>
            <div className='info-item'>
              <RiFolder3Line />
              {postCategories[0]?.name}
            </div>
            <div className='info-item'>
              <RiPriceTag3Line />
              <div className='tags'>
                {tags?.map((tag, index) => (
                  <div className='tag-btn' key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='post-item-description'>{description}</div>
        </div>
      </div>
    </PostItemWrap>
  )
}

export default memo(PostItem)
