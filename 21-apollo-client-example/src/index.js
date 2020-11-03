import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
