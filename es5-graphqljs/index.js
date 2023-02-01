const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`type Query {
  hello: String
}`);

const rootValue = { hello: () => 'Hello world!' };
const source = '{ hello }';

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});
