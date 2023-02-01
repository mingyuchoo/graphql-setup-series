import { makeSchema } from 'nexus';
import { join } from 'path';

import * as types from './graphql';

const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '../@types/nexus.d.ts'),
    schema: join(__dirname, 'schema/schema.graphql'),
  },
  nonNullDefaults: {
    input: false,
    output: false,
  },
  contextType: { module: join(__dirname, '../@types/index.d.ts'), export: 'MongoContext' },
});

export default schema;
