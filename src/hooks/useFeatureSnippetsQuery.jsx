import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'
import { featureSnippetsNum } from '@/constants/config'

const useFeatureSnippetsQuery = () => {
  return useQuery(hygraphApi.GET_FEATURE_SNIPPETS, {
    variables: { first: featureSnippetsNum }
  })
}

export default useFeatureSnippetsQuery
