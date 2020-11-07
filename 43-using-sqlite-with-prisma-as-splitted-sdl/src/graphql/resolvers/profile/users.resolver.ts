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
    getAllUsers: (parent, args, context: Context) => {
      return context.prisma.user.findMany({});
    },
    getOneUserById: (parent, args, context: Context) => {
      return context.prisma.user.findOne({
        where: { id: Number(args.id) },
      });
    },
  },
  Mutation: {
    createUserByEmail: (parent, args, context: Context) => {
      const result = context.prisma.user.create({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
      });
      // publish
      result.then((user) => {
        pubsub.publish(NEW_USER_JOINED, { newUserJoined: user });
      });
      return result;
    },
    updateUserById: (parent, args, context: Context) => {
      return context.prisma.user.update({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
        where: { id: Number(args.id) },
      });
    },
    deleteUserById: (parent, args, context: Context) => {
      return context.prisma.user.delete({
        where: { id: Number(args.id) },
      });
    },
  },
  User: {
    posts: async (parent, args, context: Context, info) => {
      return await context.prisma.user
        .findOne({
          where: { id: Number(parent.id) },
        })
        .posts();
    },
  },
};

export default users;
