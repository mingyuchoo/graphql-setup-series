import './utils/db';

import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import schema from './schema';

dotenv.config();

const app = express();

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development' ? true : false,
  introspection: true,
  tracing: true,
});

server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () =>
    // eslint-disable-next-line no-undef
    new Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve('resolving');
      } else {
        reject();
      }
    }),
});

app.listen({ port: process.env.PORT }, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT || 4000}`);
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT || '/.well-known/apollo/server-health'}`);
});
