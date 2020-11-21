'use strict';

// const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { ApolloServer } = require('apollo-server');

// const server = new ApolloServer({ typeDefs, resolvers });
const server = new ApolloServer(makeExecutableSchema({ typeDefs, resolvers}));

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
