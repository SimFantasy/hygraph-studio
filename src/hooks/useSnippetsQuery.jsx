import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'
import { snippetsListLimit } from '@/constants/config'

const useSnippetsQuery = (page, currentNav) => {
  const offset = (page - 1) * snippetsListLimit
  return useQuery(hygraphApi.GET_SNIPPETS, {
    variables: {
      first: snippetsListLimit,
      skip: offset,
      slug_contains: currentNav
    }
  })
}

export default useSnippetsQuery
