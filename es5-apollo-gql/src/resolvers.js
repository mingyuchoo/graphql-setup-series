'use strict';

const { filter } = require('lodash');
const { books } = require('./dataset');

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, context, info) => {
      filter(books, { author: args.author });
    },
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
