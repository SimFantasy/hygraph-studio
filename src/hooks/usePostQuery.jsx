import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'

const usePostQuery = () => {
  const { slug } = useParams()
  return useQuery(hygraphApi.GET_POST, {
    variables: { slug }
  })
}

export default usePostQuery
