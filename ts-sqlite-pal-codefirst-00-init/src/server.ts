import { ApolloServer } from 'apollo-server';

import { createContext } from './context';
import { schema } from './nexusSchema';

const server = new ApolloServer({
  schema,
  context: createContext,
});

void server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
