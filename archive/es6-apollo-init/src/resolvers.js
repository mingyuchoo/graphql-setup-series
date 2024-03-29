import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-scalars';

import { filter } from 'lodash';
import { books } from './dataset';

const resolvers = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,

  Query: {
    books: () => books,
    book: (parent, args, context, info) =>
      filter(books, { author: args.author }),
    sayHi: (parent, args, context, info) => {
      return `Hi, ${args.name}!`;
    },
  },

  Mutation: {
    sayHello: (parent, args, context, info) => {
      return `Hello, ${args.name}!`;
    },
  },
};

export default resolvers;
