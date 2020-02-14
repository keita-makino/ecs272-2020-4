import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import { Grid } from '@material-ui/core';

import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import data from './data/initialState';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  typeDefs: '',
  resolvers: {
    Mutation: {
      updateParallel: (_root, variables, { cache, getCacheKey }) => {
        const id = getCacheKey({
          __typename: 'parallel',
          id: variables.target
        });
        console.log(id);
        const fragment = gql`
          fragment completeTodo on TodoItem {
            completed
          }
        `;
        const todo = cache.readFragment({ fragment, id });
        const data = { ...todo, completed: !todo.completed };
        cache.writeData({ id, data });
        return null;
      }
    }
  }
});

cache.writeData({
  data
});

console.log(client.cache);
const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
          <Index />
        </Grid>
      </ApolloProvider>
    </div>
  );
};

export default App;
