import { ApolloProvider } from '@apollo/react-hooks'
import Client from './graphql/apollo/apolloClient'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={Client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
