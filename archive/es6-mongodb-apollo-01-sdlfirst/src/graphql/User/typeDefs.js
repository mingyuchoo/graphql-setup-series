import gql from 'graphql-tag';

export default gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blog: String
    stars: Int
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }

  type Mutation {
    insertUser(firstName: String!, lastName: String!, blog: String, stars: Int): User!
    updateUser(id: ID!, firstName: String!, lastName: String!, blog: String, stars: Int): Int!
    deleteUser(id: ID!): Int!
  }
`;
