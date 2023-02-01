import { ServerInfo } from 'apollo-server';
import getPort, { makeRange } from 'get-port';
import { GraphQLClient } from 'graphql-request';

import { server } from '../index';
type TestContext = {
  client: GraphQLClient;
};
export function createTestContext(): TestContext {
  const ctx = {} as TestContext;
  const graphqlCtx = graphqlTestContext();
  beforeEach(async () => {
    const client = await graphqlCtx.before();
    Object.assign(ctx, {
      client,
    });
  });
  afterEach(() => {
    graphqlCtx.after();
  });
  return ctx;
}
function graphqlTestContext() {
  let serverInstance: ServerInfo;
  return {
    async before() {
      const port = await getPort({ port: makeRange(4000, 6000) });
      serverInstance = await server.listen({ port });
      return new GraphQLClient(`http://localhost:${port}`);
    },
    after() {
      serverInstance.server.close();
    },
  };
}
