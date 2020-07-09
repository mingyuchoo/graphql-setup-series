'use strict';

const {
  GraphQLDate,
  GraphQLDateTime,
  GraphQLTime,
} = require('graphql-iso-date');

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
    book: (parent, args, context, info) =>
      filter(books, { author: args.author }),
    sayHi: (parent, args, context, info) => {
      return `Hi, ${args.name}!`;
    },
  },

  Mutation: {
    sayHello: (parent, args, context, info) => {
      return `Hello, ${args.name}!`;
    },
  },
};

module.exports = resolvers;
