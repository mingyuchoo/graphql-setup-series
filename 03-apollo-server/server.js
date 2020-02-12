const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
