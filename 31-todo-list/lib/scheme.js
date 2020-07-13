"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type User {\n    id: Int!\n    name: String!\n    email: String!\n    recipes: [Recipe!]!\n  }\n\n  type Recipe {\n    id: Int!\n    title: String!\n    ingredients: String!\n    direction: String!\n    user: User!\n  }\n\n  type Query {\n    allUsers: [User!]!\n    user(id: Int!): User\n    allRecipes: [Recipe!]!\n    recipe(id: Int!): Recipe\n  }\n\n  type Mutation {\n    createUser(name: String!, email: String!, password: String!): User!\n    createRecipe(\n      userId: Int!\n      title: String!\n      ingredients: String!\n      direction: String!\n    ): Recipe!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServer.gql)(_templateObject());
var _default = typeDefs;
exports["default"] = _default;