// src/resolvers.ts
import { IResolvers } from 'graphql-tools';
const resolvers: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `Hello GraphQL~!`;
    },
  },
};
export default resolvers;
