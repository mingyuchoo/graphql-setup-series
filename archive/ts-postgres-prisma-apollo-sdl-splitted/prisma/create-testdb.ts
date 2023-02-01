import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';
import { nanoid } from 'nanoid';
import { join } from 'path';
import { Client } from 'pg';

function prismaTestContext() {
  const prismaBinary = join(__dirname, '..', 'node_modules', '.bin', 'prisma');
  let schema = '';
  let databaseUrl = '';
  let prismaClient: PrismaClient;

  return {
    before() {
      schema = `test_${nanoid()}`;
      databaseUrl = `postgres://myusername:mypasswd@localhost:5432/apollo-nexus?schema=${schema}`;
      process.env.DATABASE_URL = databaseUrl;

      execSync(`${prismaBinary} migrate up --create-db --experimental`, {
        env: {
          ...process.env,
          DATABASE_URL: databaseUrl,
        },
      });
      // Construct a new Prisma Client connected to the generated Postgres schema
      prismaClient = new PrismaClient({});
      return prismaClient;
    },
    async after() {
      // Drop the schema after the tests have completed
      const client = new Client({
        connectionString: databaseUrl,
      });
      await client.connect();
      const res = await client.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
      console.log(`${res.command} SCHEMA is executed normally`);
      await client.end();

      // Release the Prisma Client connection
      void prismaClient.$disconnect();
    },
  };
}

// 실행 - after()를 실행하기 앞서 before()를 실행해야 필요한 객체가 생성된다.
const prismacontext = prismaTestContext();
prismacontext.before();
void prismacontext.after();
