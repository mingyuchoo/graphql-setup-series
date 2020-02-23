import { ApolloServer } from "apollo-server";
import typeDefs from "./scheme";
import resolvers from "./resolvers";
import models from "../models";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server
  .listen()
  .then(({ url }) => console.log(`🚀 Server ready at http://localhost:4000`));
