import { merge } from 'lodash';
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

import * as typeDefs from './graphql/typeDefs';
import * as resolvers from './graphql/resolvers';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: merge(Object.values(typeDefs)),
  resolvers: merge(Object.values(resolvers)),
});

export default schema;
