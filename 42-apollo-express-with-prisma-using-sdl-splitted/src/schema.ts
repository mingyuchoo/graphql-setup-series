import { merge } from 'lodash';
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

import * as typeDefs from './graphql/scheme.graphql';
import * as resolvers from './resolvers';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: merge(Object.values(resolvers)),
});

export default schema;
