import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import models, { sequelize } from './models';
import schema from './schema';
import resolvers from './resolvers';

import { createAuthors } from './seeders/initial';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
  },
});

server.applyMiddleware({ app, path: '/graphql' });

const eraseDatabaseOnSync = true;
sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createAuthors();
  }

  app.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    );
  });
});
