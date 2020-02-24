import { gql } from 'apollo-server-express';

import userSchema from './user';
import articleSchema from './article';

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

export default [userSchema, articleSchema, linkSchema];
