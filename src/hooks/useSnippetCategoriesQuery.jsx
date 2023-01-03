import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'

const useSnippetCategoriesQuery = () => {
  return useQuery(hygraphApi.GET_SNIPPET_CATEGORIES)
}

export default useSnippetCategoriesQuery
