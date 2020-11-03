import 'graphql-import-node';

import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from '../resolvers';
import * as typeDefs from './scheme.graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
