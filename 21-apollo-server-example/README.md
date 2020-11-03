# Apollo Server

## Configuring PlayGround

```
new ApolloServer({
typeDefs,
resolvers,
playground: {
  settings: {
    'editor.theme': 'light',
  },
  tabs: [
    {
      endpoint,
      query: defaultQuery,
    },
  ],
},
});
```

## Enabling GraphQL Playgroudn in production

```
const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```
