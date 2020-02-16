const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(author: String): [Book]
  }
`;

module.exports = typeDefs;
