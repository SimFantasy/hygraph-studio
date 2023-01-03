import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'
import { featureSitesNum } from '@/constants/config'

const useFeatureSitesQuery = () => {
  return useQuery(hygraphApi.GET_FEATURE_SITES, {
    variables: { first: featureSitesNum }
  })
}

export default useFeatureSitesQuery
