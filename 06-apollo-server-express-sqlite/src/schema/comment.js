import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    comments: [Comment!]!
    comment(id: ID!): Comment
  }
  extend type Mutation {
    createComment(comment: String!): Comment!
    updateComment(id: ID!, comment: String!): Comment!
    deleteComment(id: ID!): Boolean!
  }
  type Comment {
    id: ID!
    comment: String!
    author: Author!
    article: Article!
  }
`;
