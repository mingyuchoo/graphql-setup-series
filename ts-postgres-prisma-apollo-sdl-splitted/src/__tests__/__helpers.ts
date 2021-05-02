import { PrismaClient } from '@prisma/client';
import { ApolloServer, ServerInfo } from 'apollo-server';
import { execSync } from 'child_process';
import getPort, { makeRange } from 'get-port';
import { GraphQLClient } from 'graphql-request';
import { nanoid } from 'nanoid';
import { join } from 'path';
import { Client } from 'pg';

import { createContext } from '../context';
import schema from '../schema';
const server = new ApolloServer({ schema, context: createContext });

type TestContext = {
  client: GraphQLClient;
  prisma: PrismaClient;
};

function prismaTestContext() {
  const prismaBinary = join(__dirname, '../../', 'node_modules', '.bin', 'prisma');
  let schema = '';
  let databaseUrl = '';
  let prisma: PrismaClient;
  return {
    before() {
      // Generate a unique schema identifier for this test context
      schema = `test_${nanoid()}`;

      // Generate the pg connection string for the test schema
      databaseUrl = `postgres://myusername:mypasswd@localhost:5432/apollo-nexus?schema=${schema}`;

      // Set the required environment variable to contain the connection string to our database test schema
      process.env.DATABASE_URL = databaseUrl;

      // Run the migrations to ensure our schema has the required structure
      execSync(`${prismaBinary} migrate up --create-db --experimental`, {
        env: {
          ...process.env,
          DATABASE_URL: databaseUrl,
        },
      });

      // Construct a new Prisma Client connected to the generated Postgres schema
      prisma = new PrismaClient({});
      return { prisma };
    },

    async after() {
      // Drop the schema after the tests have completed
      const client = new Client({
        connectionString: databaseUrl,
      });
      // await client.connect();
      const res = await client.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
      console.log(`${res.command} SCHEMA is executed normally`);
      await client.end();

      // Release the Prisma Client connection
      await prisma.$disconnect();
    },
  };
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

export function createTestContext(): TestContext {
  const context = {} as TestContext;
  const prismacontext = prismaTestContext();
  const graphqlcontext = graphqlTestContext();

  beforeEach(async () => {
    const prisma = prismacontext.before();
    const client = await graphqlcontext.before();
    Object.assign(context, {
      client,
      prisma,
    });
  });

  afterEach(async () => {
    graphqlcontext.after();
    await prismacontext.after();
  });

  return context;
}
