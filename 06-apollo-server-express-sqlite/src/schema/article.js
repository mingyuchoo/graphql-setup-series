import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    articles: [Article!]!
    article(id: ID!): Article
  }
  extend type Mutation {
    createArticle(title: String!, content: String!): Article!
    updateArticle(id: ID!, title: String!, content: String!): Article!
    deleteArticle(id: ID!): Boolean!
  }
  type Article {
    id: ID!
    title: String!
    content: String!
    user: User!
  }
`;
