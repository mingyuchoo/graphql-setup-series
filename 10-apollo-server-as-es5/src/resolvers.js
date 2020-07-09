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
    book: (parent, args, context, info) => {
      filter(books, { author: args.author });
    },
    // say Hi
    sayHi: (parent, args, context, info) => {
      return `Hi, ${args.name}!`;
    },
    // file uploads
    uploads: (parent, args, context, info) => {},
  },

  Mutation: {
    // say Hello
    sayHello: (parent, args, context, info) => {
      return `Hello, ${args.name}!`;
    },
    // file single uploads
    singleUpload: (parent, args, context, info) => {
      return args.file.then((file) => {
        return file;
      });
    },
  },
};

module.exports = resolvers;
