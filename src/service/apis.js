import { gql } from '@apollo/client'

const GET_AUTHOR = gql`
  query author($id: ID!) {
    author(where: { id: $id }) {
      bio
      username
      avatar {
        url
      }
    }
  }
`

const GET_FEATURE_POSTS = gql`
  query featurePosts($first: Int!) {
    postsConnection(first: $first, orderBy: createdAt_DESC, where: { feature: true }) {
      edges {
        node {
          cover
          createdAt
          postCategories {
            name
            slug
          }
          slug
          tags
          title
          description
        }
      }
    }
  }
`

const GET_POSTS = gql`
  query posts($first: Int!, $skip: Int = 0, $slug_contains: String = "") {
    postsConnection(
      first: $first
      skip: $skip
      where: { postCategories_every: { slug_contains: $slug_contains } }
      orderBy: createdAt_DESC
    ) {
      edges {
        node {
          cover
          createdAt
          description
          slug
          tags
          title
          postCategories {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`

const GET_POST = gql`
  query post($slug: String!) {
    post(where: { slug: $slug }) {
      content
      cover
      createdAt
      postCategories {
        name
      }
      tags
      title
    }
  }
`

const GET_POST_CATEGORIES = gql`
  query postCategories {
    postCategories {
      name
      slug
    }
  }
`

const GET_FEATURE_SNIPPETS = gql`
  query featureSnippets($first: Int!) {
    snippetsConnection(first: $first, orderBy: createdAt_DESC, where: { feature: true }) {
      edges {
        node {
          slug
          tags
          title
          snippetCategories {
            name
            slug
          }
        }
      }
    }
  }
`

const GET_SNIPPETS = gql`
  query snippets($first: Int!, $skip: Int = 0, $slug_contains: String = "") {
    snippetsConnection(
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
      where: { snippetCategories_every: { slug_contains: $slug_contains } }
    ) {
      edges {
        node {
          slug
          tags
          title
          snippetCategories {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`

const GET_SNIPPET = gql`
  query snippet($slug: String!) {
    snippet(where: { slug: $slug }) {
      content
      createdAt
      tags
      title
      snippetCategories {
        name
        slug
      }
    }
  }
`

const GET_SNIPPET_CATEGORIES = gql`
  query snippetCategories {
    snippetCategories {
      name
      slug
    }
  }
`

const GET_FEATURE_SITES = gql`
  query featureSites($first: Int!) {
    sitesConnection(first: $first, orderBy: createdAt_DESC, where: { feature: true }) {
      edges {
        node {
          description
          icon
          link
          slug
          title
        }
      }
    }
  }
`

const GET_SITES = gql`
  query sites($first: Int!, $skip: Int = 0, $slug_contains: String = "") {
    sitesConnection(
      first: $first
      skip: $skip
      where: { siteCategories_every: { slug_contains: $slug_contains } }
      orderBy: createdAt_DESC
    ) {
      edges {
        node {
          description
          icon
          link
          slug
          title
          siteCategories {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`

export const GET_SITE_CATEGORIES = gql`
  query siteCategories {
    siteCategories {
      name
      slug
    }
  }
`

export default {
  GET_AUTHOR,
  GET_FEATURE_POSTS,
  GET_POSTS,
  GET_POST,
  GET_POST_CATEGORIES,
  GET_FEATURE_SNIPPETS,
  GET_SNIPPETS,
  GET_SNIPPET,
  GET_SNIPPET_CATEGORIES,
  GET_FEATURE_SITES,
  GET_SITES,
  GET_SITE_CATEGORIES
}
