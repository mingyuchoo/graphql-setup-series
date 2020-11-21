'use strict';

const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type File {
    filename: String
    mimetype: String
    encoding: String
  }

  type Query {
    books: [Book]
    book(author: String): [Book]
    sayHi(name: String): String
  }

  type Mutation {
    sayHello(name: String): String
  }
`;

module.exports = typeDefs;
