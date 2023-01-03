import React from 'react'
import { RiCalendarTodoLine } from 'react-icons/ri'
import { MarkdownContent, Spin } from '@/components'
import { useSnippetQuery } from '@/hooks'
import { fullDateFormat, snippetIcon } from '@/utils'
import { SnippetWrap } from './style'

const Snippet = () => {
  const { data, loading } = useSnippetQuery()
  if (loading)
    return (
      <SnippetWrap>
        <div className='container snippet-container'>
          <div className='page-card'>
            <Spin />
          </div>
        </div>
      </SnippetWrap>
    )
  const { title, createdAt, snippetCategories, tags, content } = data.snippet
  return (
    <SnippetWrap>
      <div className='container snippet-container'>
        <div className='page-card'>
          <div className='snippet-title'>{title}</div>
          <div className='snippet-info'>
            <div className='info-item'>
              <RiCalendarTodoLine />
              {fullDateFormat(createdAt)}
            </div>
            <div className='info-item'>
              {snippetIcon(snippetCategories[0]?.slug)}
              {snippetCategories[0]?.name}
            </div>
          </div>
          <div className='snippet-content'>
            <MarkdownContent source={content} />
          </div>
          <div className='snippet-tags'>
            {tags?.map((tag, index) => (
              <div className='tag-item' key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SnippetWrap>
  )
}

export default Snippet
