import { makeSchema } from 'nexus';
import { join } from 'path';

import * as types from './graphql';

const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '/generated/nexus.ts'),
    schema: join(__dirname, '/generated/schema.graphql'),
  },
  contextType: {
    module: join(__dirname, './context.ts'),
    alias: 'ContextModule',
  },
});

export default schema;
