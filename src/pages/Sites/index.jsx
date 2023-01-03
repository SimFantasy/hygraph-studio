import React, { useState, useEffect } from 'react'
import { ListTitlebar, SiteList } from '@/components'
import { useSiteCategoriesQuery, useSitesQuery } from '@/hooks'
import { sitesListLimit } from '@/constants/config'
import { SitesWrap } from './style'

const Sites = () => {
  const [currentNav, setCurrentNav] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [currentNav])

  const { data: categoriesData } = useSiteCategoriesQuery()
  const { data: sitesData, loading: sitesLoading } = useSitesQuery(currentPage, currentNav)
  return (
    <SitesWrap>
      <div className='container sites-container'>
        <ListTitlebar
          title='Snippets'
          navs={categoriesData?.siteCategories}
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
        />
        <SiteList
          data={sitesData}
          loading={sitesLoading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          limit={sitesListLimit}
        />
      </div>
    </SitesWrap>
  )
}

export default Sites
