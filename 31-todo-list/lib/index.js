"use strict";

var _apolloServer = require("apollo-server");

var _scheme = _interopRequireDefault(require("./scheme"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _models = _interopRequireDefault(require("./db/models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = new _apolloServer.ApolloServer({
  typeDefs: _scheme["default"],
  resolvers: _resolvers["default"],
  context: {
    models: _models["default"]
  },
  introspection: true,
  playground: true
});
server.listen({
  port: process.env.PORT || 4000
}).then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80 Server ready at ".concat(url));
});