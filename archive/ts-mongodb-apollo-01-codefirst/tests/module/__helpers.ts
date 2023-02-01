import express from 'express';
import getPort, { makeRange } from 'get-port';
import { GraphQLClient } from 'graphql-request';
import { server } from '../../src';

type TestContext = {
  client: GraphQLClient;
};

export function createTestContext(): TestContext {
  let context = {} as TestContext;
  const graphqlCtx = graphqlTestContext();
  beforeEach(async () => {
    const client = await graphqlCtx.before();
    Object.assign(context, {
      client,
    });
  });
  afterEach(async () => {
    await graphqlCtx.after();
  });
  return context;
}

function graphqlTestContext() {
  let serverInstance: any;
  const app = express();
  return {
    async before() {
      const port = await getPort({ port: makeRange(4000, 6000) });
      server.applyMiddleware({ app });
      serverInstance = await app.listen({ port });
      return new GraphQLClient(`http://localhost:${port}`);
    },
    async after() {
      serverInstance?.server.close();
    },
  };
}
