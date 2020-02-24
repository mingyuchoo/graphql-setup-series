import { gql } from 'apollo-server-express';

import authorSchema from './author';
import articleSchema from './article';
import commentSchema from './comment';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [authorSchema, articleSchema, commentSchema, linkSchema];
