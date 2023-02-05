import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const Client = new ApolloClient({
  cache: new InMemoryCache() as any,
  link: new HttpLink({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cldn01hea1pel01unbkw8chyr/master'
  })
})

export default Client