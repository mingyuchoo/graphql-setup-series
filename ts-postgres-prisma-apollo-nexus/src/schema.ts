import { declarativeWrappingPlugin, makeSchema, queryComplexityPlugin } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';

// import * as typeDefs from './graphql';
import typeArray from './graphql';

export const schema = makeSchema({
  types: typeArray,
  // Configure the interface to Prisma
  plugins: [
    declarativeWrappingPlugin(),
    nexusPrisma({
      experimentalCRUD: true,
      // outputs: { typegen: __dirname + '/@types/nexus-prisma.d.ts' },
    }),
    queryComplexityPlugin(), // TODO 복잡도 처리 필요 (https://nexusjs.org/docs/plugins/query-complexity)
  ],
  // Specify where Nexus should put the generated files
  outputs: {
    typegen: join(__dirname, './@types', 'nexus.d.ts'),
    schema: join(__dirname, './schema', 'schema.graphql'),
  },
  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false,
  },
  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: join(__dirname, './types.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
});
