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
    getAllUsers: async (parent, args, context: Context, info) => {
      return await context.prisma.user.findMany({});
    },
    getOneUserById: async (parent, args, context: Context, info) => {
      return await context.prisma.user.findOne({
        where: { id: Number(args.id) },
      });
      // return await context.prisma.$queryRaw`SELECT * FROM User WHERE id = ${args.id};`;
    },
  },
  Mutation: {
    createUser: async (parent, args, context: Context, info) => {
      const storedUser = await context.prisma.user.create({
        data: {
          email: String(args.email),
          username: String(args.username),
        },
      });
      // publish
      pubsub.publish(NEW_USER_JOINED, { newUserJoined: storedUser });

      return storedUser;
    },
    updateUserById: async (parent, args, context: Context, info) => {
      return await context.prisma.user.update({
        data: {
          email: String(args.email),
          username: String(args.username),
        },
        where: { id: Number(args.id) },
      });
    },
    countUpPostCountById: async (parent, args, context: Context, info) => {
      let user = await context.prisma.user.findOne({
        where: { id: Number(args.id) },
      });

      return await context.prisma.user.update({
        data: {
          postCount: (user?.postCount || 0) + 1,
        },
        where: { id: Number(args.id), email: String(args.email) },
      });
    },
    deleteUserById: async (parent, args, context: Context, info) => {
      return await context.prisma.user.delete({
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
