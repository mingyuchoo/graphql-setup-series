import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';

const gateway = new ApolloGateway({
  // This entire `serviceList` is optional when running in managed federation
  // mode, using Apollo Graph Manager as the source of truth.  In production,
  // using a single source of truth to compose a schema is recommended and
  // prevents composition failures at runtime using schema validation using
  // real usage-based metrics.
  serviceList: [
    { name: 'accounts', url: 'http://localhost:4001/graphql' },
    // { name: 'reviews', url: 'http://localhost:4002/graphql' },
    // { name: 'products', url: 'http://localhost:4003/graphql' },
    // { name: 'inventory', url: 'http://localhost:4004/graphql' },
  ],
});

const server = new ApolloServer({
  gateway,
  // Subscriptions are unsupported but planned for a future Gateway version.
  subscriptions: false,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
});
