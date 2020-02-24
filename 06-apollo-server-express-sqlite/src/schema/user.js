import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }
  extend type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    updateUser(id: ID!, name: String!, role: String!): User!
    deleteUser(id: ID!): Boolean!
  }
  type User {
    id: ID!
    username: String!
    name: String!
    email: String!
    password: String!
    role: String
    articles: [Article!]!
  }
`;
