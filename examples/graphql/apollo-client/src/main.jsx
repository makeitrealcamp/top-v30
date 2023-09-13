import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

import App from './App'
import './index.css'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})


/* client.query({
  query: gql`
    query AllCharacters {
      characters {
        results {
          name
          status
          image
        }
      }
  }
  `
})
.then((response) => console.log('Query success!', response))
.catch((error) => console.log('Query error!', error)) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)
