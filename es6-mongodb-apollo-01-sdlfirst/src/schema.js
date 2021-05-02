import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
