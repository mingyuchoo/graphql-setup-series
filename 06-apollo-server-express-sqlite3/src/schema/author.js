import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    authors: [Author!]!
    author(id: ID!): Author
  }
  extend type Mutation {
    createAuthor(username: String!, email: String!, password: String!): Author!
    updateAuthor(id: ID!, name: String!, role: String!): Author!
    deleteAuthor(id: ID!): Boolean!
  }
  type Author {
    id: ID!
    username: String!
    name: String!
    email: String!
    password: String!
    role: String
    articles: [Article!]!
  }
`;
