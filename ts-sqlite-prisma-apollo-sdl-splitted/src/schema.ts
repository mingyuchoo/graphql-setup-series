import 'graphql-import-node';

import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import * as resolvers from './graphql/resolvers';
import * as typeDefs from './graphql/typeDefs';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: merge(Object.values(typeDefs)),
  resolvers: merge(Object.values(resolvers)),
});

export default schema;
