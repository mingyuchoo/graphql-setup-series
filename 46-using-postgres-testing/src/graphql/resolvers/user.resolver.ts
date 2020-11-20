// src/resolverMap.ts
import { PubSub } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

import * as types from '../../@types';
import { Context } from '../../context';

const pubsub = new PubSub();

// publish triggers
const NEW_USER_JOINED = 'NEW_USER_JOINED';

const User: IResolvers = {
  // move from post.resolver.ts because break up my schema by concern, not by type.
  Post: {
    author: async (parent, args, context: Context, info) => {
      return await context.prisma.post
        .findOne({
          where: { id: Number(parent.id) },
        })
        .author();
    },
  },
  Query: {
    users: async (parent, { where, orderBy, take, skip }: types.QueryUsersArgs, context: Context) => {
      return await context.prisma.user.findMany({
        where,
        orderBy,
        take,
        skip,
      });
    },
    user: async (parent, args: types.QueryUserArgs, context: Context) => {
      return await context.prisma.user.findOne({
        ...args,
      });
    },
    searchUsers: async (parent, args: types.QuerySearchUsersArgs, context: Context) => {
      return await context.prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: args.searchString === null ? '' : args.searchString } },
            { email: { contains: args.searchString === null ? '' : args.searchString } },
          ],
        },
      });
    },
  },
  Mutation: {
    createUserByEmail: async (parent, args: types.MutationCreateUserByEmailArgs, context: Context) => {
      const resultUserInfo = await context.prisma.user.create({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
      });

      void pubsub.publish(NEW_USER_JOINED, { newUserJoined: resultUserInfo });

      // // ==> Promises must be handled appropriately or explicitly marked as ignored with the `void` operator.
      // result.then((user) => {
      //   pubsub.publish(NEW_USER_JOINED, { newUserJoined: user });
      // });

      return resultUserInfo;
    },
    updateOneUser: async (parent, args: types.MutationUpdateOneUserArgs, context: Context) => {
      return await context.prisma.user.update({
        data: {
          email: args.email,
          name: args.name,
        },
        where: args.where,
      });
    },
    deleteOneUser: async (parent, args: types.MutationDeleteOneUserArgs, context: Context) => {
      return await context.prisma.user.delete({
        ...args,
      });
    },
  },
  Subscription: {
    newUserJoined: {
      subscribe: () => pubsub.asyncIterator([NEW_USER_JOINED]),
    },
  },
};

export default User;
