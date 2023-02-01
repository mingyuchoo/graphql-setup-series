import fs from 'fs-extra';
import { printSchema } from 'graphql';
import path from 'path';

import Schema from '../schema';

async function buildSchema() {
  await fs.ensureFile(path.join(__dirname, '../generated/schema.graphql'));

  fs.writeFileSync(path.join(__dirname, '../generated/schema.graphql.txt'), printSchema(Schema));
}

async function run() {
  await buildSchema();
  console.log('Schema build complete!');
}

run().catch((e) => {
  console.log(e);
  process.exit(0);
});
