import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'
import { sitesListLimit } from '@/constants/config'

const useSitesQuery = (page, currentNav) => {
  const offset = (page - 1) * sitesListLimit
  return useQuery(hygraphApi.GET_SITES, {
    variables: {
      first: sitesListLimit,
      skip: offset,
      slug_contains: currentNav
    }
  })
}

export default useSitesQuery
