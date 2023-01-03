import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'

const useSiteCategoriesQuery = () => {
  return useQuery(hygraphApi.GET_SITE_CATEGORIES)
}

export default useSiteCategoriesQuery
