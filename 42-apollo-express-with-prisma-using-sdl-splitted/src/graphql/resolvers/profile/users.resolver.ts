// src/resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { Context } from '../../../context';

const users: IResolvers = {
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
    createUserByEmail: async (parent, args, context: Context, info) => {
      return await context.prisma.user.create({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
      });
    },
    updateUserById: async (parent, args, context: Context, info) => {
      return await context.prisma.user.update({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
        where: { id: Number(args.id) },
      });
    },
    addOnePostToUserById: async (parent, args, context: Context, info) => {
      let user = await context.prisma.user.findOne({
        where: { id: Number(args.id), email: String(args.email) },
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
