import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import http from 'http';

import { createContext } from './context';
import schema from './schema';

const port = process.env.PORT || 4000;

const app = express();
app.use('*', cors());
const httpServer = http.createServer(app);

const server = new ApolloServer({
  schema,
  context: createContext,
});

server.applyMiddleware({ app, path: '/graphql' });
server.installSubscriptionHandlers(httpServer);

httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`);
});
