import React from 'react'
import { Titlebar, PostList, SnippetList, SiteList } from '@/components'
import { useFeaturePostsQuery, useFeatureSnippetsQuery, useFeatureSitesQuery } from '@/hooks'
import { HomeWrap } from './style'

const Home = () => {
  const { data: postsData, loading: postsLoading } = useFeaturePostsQuery()
  const { data: snippetsData, loading: snippetsLoading } = useFeatureSnippetsQuery()
  const { data: sitesData, loading: sitesLoading } = useFeatureSitesQuery()

  return (
    <HomeWrap>
      <div className='container home-container'>
        <Titlebar title='Posts' link='/posts' />
        <div className='page-block'>
          <PostList data={postsData} showCover={false} loading={postsLoading} />
        </div>

        <Titlebar title='Snippets' link='/snippets' />
        <div className='page-block'>
          <SnippetList data={snippetsData} loading={snippetsLoading} />
        </div>

        <Titlebar title='Sites' link='/sites' />
        <div className='page-block'>
          <SiteList data={sitesData} loading={sitesLoading} />
        </div>
      </div>
    </HomeWrap>
  )
}

export default Home
