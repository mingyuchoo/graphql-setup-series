// src/resolverMap.ts
import { PubSub } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

import { Context } from '../../../context';

const pubsub = new PubSub();

// publish triggers
const NEW_USER_JOINED = 'NEW_USER_JOINED';

const users: IResolvers = {
  Subscription: {
    newUserJoined: {
      subscribe: () => pubsub.asyncIterator([NEW_USER_JOINED]),
    },
  },
  Query: {
    users: async (_, args, ctx: Context) => {
      return await ctx.prisma.user.findMany({
        ...args,
      });
    },
    user: async (_, args, ctx: Context) => {
      return await ctx.prisma.user.findOne({
        ...args,
      });
    },
    searchUsers: async (_, { searchString }, ctx: Context) => {
      return await ctx.prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: searchString === null ? '' : searchString } },
            { email: { contains: searchString === null ? '' : searchString } },
          ],
        },
      });
    },
  },
  Mutation: {
    createUserByEmail: async (_, args, ctx: Context) => {
      const result = ctx.prisma.user.create({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
      });
      return await result.then((user) => {
        pubsub.publish(NEW_USER_JOINED, { newUserJoined: user });
      });
    },
    updateUserById: async (_, args, ctx: Context) => {
      return await ctx.prisma.user.update({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
        where: { id: Number(args.id) },
      });
    },
    deleteUserById: async (_, args, ctx: Context) => {
      return await ctx.prisma.user.delete({
        where: { id: Number(args.id) },
      });
    },
  },
  User: {
    posts: async (_, args, ctx: Context, info) => {
      return await ctx.prisma.user
        .findOne({
          where: { id: Number(_.id) },
        })
        .posts();
    },
  },
};

export default users;
