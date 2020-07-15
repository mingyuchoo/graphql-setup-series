// src/resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { Context } from './context';

const resolvers: IResolvers = {
  Query: {
    helloWorld: (parent: void, args: void, context: void, info: void): string => {
      return `Hello, Apollo Express for GraphQL`;
    },
    movies: (parent: void, args: any, context: Context, info: void): any => {
      return context.prisma.movie.findMany({});
    },
  },
};
export default resolvers;
