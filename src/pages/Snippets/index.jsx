import React, { useState, useEffect } from 'react'
import { ListTitlebar, SnippetList } from '@/components'
import { useSnippetCategoriesQuery, useSnippetsQuery } from '@/hooks'
import { snippetsListLimit } from '@/constants/config'
import { SnippetsWrap } from './style'

const Snippets = () => {
  const [currentNav, setCurrentNav] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [currentNav])

  const { data: categoriesData } = useSnippetCategoriesQuery()
  const { data: snippetsData, loading: snippetsLoading } = useSnippetsQuery(currentPage, currentNav)

  return (
    <SnippetsWrap>
      <div className='container snippets-container'>
        <ListTitlebar
          title='Snippets'
          navs={categoriesData?.snippetCategories}
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
        />
        <SnippetList
          data={snippetsData}
          loading={snippetsLoading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          limit={snippetsListLimit}
        />
      </div>
    </SnippetsWrap>
  )
}

export default Snippets
