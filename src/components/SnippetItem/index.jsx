import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { snippetIcon } from '@/utils'
import { SnippetItemWrap } from './style'

const SnippetItem = ({ title, tags, snippetCategories, slug }) => {
  return (
    <SnippetItemWrap>
      <div className='snippet-item-container'>
        <div className='snippet-item-category'>
          <div className='category-icon'>{snippetIcon(snippetCategories[0]?.slug)}</div>
          <div className='category-text'>{snippetCategories[0]?.name}</div>
        </div>
        <Link to={`/snippet/${slug}`} className='snippet-item-title'>
          {title}
        </Link>
        <div className='snippet-item-tags'>
          {tags.map((tag, index) => (
            <div className='tag-btn' key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </SnippetItemWrap>
  )
}

export default memo(SnippetItem)
