import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import schema from './schema';

const app = express();
const port = process.env.PORT || 4000;

const server = new ApolloServer({
  schema,
});

app.use('*', cors());

server.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => {
  console.log(`Apollo server listening at ${port}`);
});
