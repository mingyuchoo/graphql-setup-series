import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { CommentMutation, CommentQuery } from './comment';
import { PostMutation, PostQuery } from './post';
import { UserMutation, UserQuery } from './user';

schemaComposer.Query.addFields({
  ...CommentQuery,
  ...UserQuery,
  ...PostQuery,
});

schemaComposer.Mutation.addFields({
  ...CommentMutation,
  ...UserMutation,
  ...PostMutation,
});

export default schemaComposer.buildSchema();
