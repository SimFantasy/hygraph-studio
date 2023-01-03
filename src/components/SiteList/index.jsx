import React, { memo } from 'react'
import { SiteItem, Pagination, Spin } from '@/components'
import { SiteListWrap } from './style'

const SiteList = ({ data, loading, currentPage, setCurrentPage, limit }) => {
  if (loading)
    return (
      <SiteListWrap>
        <div className='site-list-container'>
          <Spin />
        </div>
      </SiteListWrap>
    )
  return (
    <SiteListWrap>
      <div className='site-list-container'>
        {data?.sitesConnection?.edges?.map(site => (
          <div className='page-card' key={site?.node?.slug}>
            <SiteItem {...site?.node} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasPreviousPage={data?.sitesConnection?.pageInfo?.hasPreviousPage}
        hasNextPage={data?.sitesConnection?.pageInfo?.hasNextPage}
        count={data?.sitesConnection?.aggregate?.count}
        limit={limit}
      />
    </SiteListWrap>
  )
}

export default memo(SiteList)
