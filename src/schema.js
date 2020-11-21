'use strict';

const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date
  scalar Time
  scalar DateTime

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
    uploads: [File]
  }

  type Mutation {
    sayHello(name: String): String
    singleUpload(file: Upload): File
  }
`;

module.exports = typeDefs;
