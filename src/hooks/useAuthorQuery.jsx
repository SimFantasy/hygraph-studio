import React from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'

const useAuthorQuery = () => {
  return useQuery(hygraphApi.GET_AUTHOR, {
    variables: { id: import.meta.env.VITE_AUTHOR_ID }
  })
}

export default useAuthorQuery
