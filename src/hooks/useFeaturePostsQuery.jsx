import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'
import { featurePostsNum } from '@/constants/config'

const useFeaturePostsQuery = () => {
  return useQuery(hygraphApi.GET_FEATURE_POSTS, {
    variables: { first: featurePostsNum }
  })
}

export default useFeaturePostsQuery
