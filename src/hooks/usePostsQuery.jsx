import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import hygraphApi from '@/service/apis'
import { postsListLimit } from '@/constants/config'

const usePostsQuery = (page, currentNav) => {
  const offset = (page - 1) * postsListLimit
  return useQuery(hygraphApi.GET_POSTS, {
    variables: {
      first: postsListLimit,
      skip: offset,
      slug_contains: currentNav
    }
  })
}

export default usePostsQuery
