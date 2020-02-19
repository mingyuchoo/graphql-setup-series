import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import { ApolloServer, AuthenticationError } from "apollo-server-express";

import schema from "./schema";
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

import dotenv from "dotenv";
dotenv.config();

const getMe = async req => {
  const token = req.headers["x-token"];
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (error) {
      throw new AuthenticationError("Your session expired. Sign in again.");
    }
  }
};
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: error => {
    const message = error.message
      .replace("SequelizeValidationError: ", "")
      .replace("Validation error: ", "");
    return {
      ...error,
      message
    };
  },
  context: async ({ req }) => {
    const me = await getMe(req);

    return {
      models,
      me: models.User.findByLogin("rwieruch"),
      secret: process.env.SECRET
    };
  }
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });

const eraseDatabaseOnSync = true;
const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: "rwieruch",
      email: "helllo@robin.com",
      password: "rwieruch",
      role: "ADMIN",
      messages: [
        {
          text: "Published the Road to learn React"
        }
      ]
    },
    {
      include: [models.Message]
    }
  );
  await models.User.create(
    {
      username: "ddavids",
      email: "hello@david.com",
      password: "ddavids",
      messages: [
        {
          text: "Happy to release ..."
        },
        {
          text: "Published a complete ..."
        }
      ]
    },
    {
      include: [models.Message]
    }
  );
};

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
