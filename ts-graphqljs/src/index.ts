import { buildSchema, graphql } from 'graphql';

const schema = buildSchema(`type Query {
  hello: String
}`);

const root = { hello: () => 'Hello world!' };

void graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
