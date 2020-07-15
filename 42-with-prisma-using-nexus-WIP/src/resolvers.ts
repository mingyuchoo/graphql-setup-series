// src/resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { Context } from './context';

const resolvers: IResolvers = {
  Query: {
    feed: (parent, args, ctx: Context) => {
      return ctx.prisma.post.findMany({
        where: { published: true },
      });
    },
  },
  User: {
    posts: (parent, args, ctx: Context) => {
      return ctx.prisma.user
        .findOne({
          where: { id: parent.id },
        })
        .posts();
    },
  },
  Post: {
    author: (parent, args, ctx: Context) => {
      return ctx.prisma.post
        .findOne({
          where: { id: parent.id },
        })
        .author();
    },
  },
};

export default resolvers;
