'use strict';

const { filter } = require('lodash');
const { books } = require('./dataset');

const resolvers = {
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
