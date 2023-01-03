import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'

const usePostCategoriesQuery = () => {
  return useQuery(hygraphApi.GET_POST_CATEGORIES)
}

export default usePostCategoriesQuery
