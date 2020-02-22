import http from "http";
import cors from "cors";
import jwt from "jsonwebtoken";
import express from "express";
import { ApolloServer, AuthenticationError } from "apollo-server-express";

import schema from "./schema";
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

import DataLoader from "dataloader";
import loaders from "./loaders";

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

// const batchUsers = async (keys, models) => {
//   const usres = await models.User.findAll({
//     where: {
//       id: {
//         $in: keys
//       }
//     }
//   });
//   return keys.map(key => usres.find(user => user.id === key));
// };
//
// const userLoader = new DataLoader(keys => batchUsers(keys, models));

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
  context: async ({ req, connection }) => {
    if (connection) {
      return {
        models,
        loaders: {
          user: new DataLoader(keys => loaders.user.batchUsers(keys, models))
        }
      };
    }
    if (req) {
      const me = await getMe(req);

      return {
        models,
        me,
        secret: process.env.SECRET,
        loaders: {
          user: new DataLoader(keys => loaders.user.batchUsers(keys, models))
        }
      };
    }
  }
});

const app = express();
app.use(cors());
server.applyMiddleware({ app, path: "/graphql" });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const createUsersWithMessages = async date => {
  await models.User.create(
    {
      username: "rwieruch",
      email: "hello@robin.com",
      password: "rwieruch",
      role: "ADMIN",
      messages: [
        {
          text: "Published the Road to learn React",
          createdAt: date.setSeconds(date.getSeconds() + 1)
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
          text: "Happy to release ...",
          createdAt: date.setSeconds(date.getSeconds() + 1)
        },
        {
          text: "Published a complete ...",
          createdAt: date.setSeconds(date.getSeconds() + 1)
        }
      ]
    },
    {
      include: [models.Message]
    }
  );
};

const eraseDatabaseOnSync = true;
const isTest = !!process.env.TEST_DATABASE;

sequelize.sync({ force: isTest }).then(async () => {
  if (isTest) {
    createUsersWithMessages(new Date());
  }

  httpServer.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
