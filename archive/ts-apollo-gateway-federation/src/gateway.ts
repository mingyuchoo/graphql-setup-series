import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
  gateway: new ApolloGateway({
    serviceList: [
      { name: 'accounts', url: 'http://localhost:4001/graphql' },
      { name: 'reviews', url: 'http://localhost:4002/graphql' },
      { name: 'products', url: 'http://localhost:4003/graphql' },
      { name: 'inventory', url: 'http://localhost:4004/graphql' },
    ],
  }),
  subscriptions: false,
});

void server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${String(url)}`);
});
