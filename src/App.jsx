import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import RootRoute from '@/router'
import RootStyle from '@/styles/base.style'
import Layout from '@/components/Layout'

const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_CONTENT_API, // graphql的服务器端点
  cache: new InMemoryCache() // 缓存
})

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <RootStyle />
        <Layout>
          <RootRoute />
        </Layout>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
