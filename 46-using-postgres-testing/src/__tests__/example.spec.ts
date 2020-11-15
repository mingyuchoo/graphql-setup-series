import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

import { createContext } from '../context';

// mocks/mockData.ts
const prisma = {
  allUsers: () => [{ id: 1 }, { id: 2 }],
};

// typeDefs (schema.graphql)
const typeDefs = gql`
  type User {
    id: ID
  }
  type Query {
    users: [User]
  }
`;

// resolvers (*.resolvers.ts)
const resolvers = {
  Query: {
    users(root: any, args: any, ctx: any) {
      return ctx.prisma.allUsers();
    },
  },
};

// Test Case Specification
const allMoviesTestCase = {
  id: 'All Users Test Case',
  query: `
      query {
        users {
           id 
        }
      }
    `,
  variables: {},

  // Injecting the mock movie server with canned responses
  context: { prisma: prisma },

  // Expected result
  expected: {
    data: {
      users: [{ id: '1' }, { id: '2' }],
    },
  },
};

describe('Schema', () => {
  // Create Schema
  const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  // Array of case types
  const testCases = [allMoviesTestCase];

  testCases.forEach((testCase) => {
    const { id, query, variables, context, expected } = testCase;
    test(`query: ${id}`, async () => {
      const result = await graphql(schema, query, null, context, variables);
      return expect(result).toEqual(expected);
    });
  });
});
