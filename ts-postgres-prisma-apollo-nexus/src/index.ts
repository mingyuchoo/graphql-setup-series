import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import { schema } from './schema';
import { createContext } from './context';

const port = process.env.PORT || 4000;

const app = express();
app.use('*', cors());
const httpServer = http.createServer(app);

const server = new ApolloServer({
  schema,
  context: createContext,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });
server.applyMiddleware({ app, path: '/graphql' });
server.installSubscriptionHandlers(httpServer);

httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`);
});
