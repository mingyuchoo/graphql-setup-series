'use strict';

const {
  GraphQLDate,
  GraphQLDateTime,
  GraphQLTime,
} = require('graphql-scalars');

const { filter } = require('lodash');
const { books } = require('./dataset');

const resolvers = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,

  Query: {
    // selectAll
    books: () => books,
    // selectOne
    book: (parent, args, context, info) => {
      filter(books, { author: args.author });
    },
    // say Hi
    sayHi: (parent, args, context, info) => {
      return `Hi, ${args.name}!`;
    },
  },

  Mutation: {
    // say Hello
    sayHello: (parent, args, context, info) => {
      return `Hello, ${args.name}!`;
    },
  },
};

module.exports = resolvers;
