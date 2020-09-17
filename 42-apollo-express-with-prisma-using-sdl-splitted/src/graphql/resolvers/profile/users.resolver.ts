// src/resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { Context } from '../../../context';

const users: IResolvers = {
  Query: {
    getAllUsers: (parent, args, context: Context, info) => {
      return context.prisma.user.findMany({});
    },
    getOneUserById: (parent, args, context: Context, info) => {
      return context.prisma.user.findOne({
        where: { id: Number(args.id) },
      });
    },
  },
  Mutation: {
    createUserByEmail: (parent, args, context: Context, info) => {
      return context.prisma.user.create({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
      });
    },
    updateUserById: (parent, args, context: Context, info) => {
      return context.prisma.user.update({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
        where: { id: Number(args.id) },
      });
    },
    addOnePostToUserById: (parent, args, context: Context, info) => {
      let thisUser = context.prisma.user.findOne({
        where: { id: Number(args.id) },
      });
      return context.prisma.user.update({
        data: {
          postCount: 1,
        },
        where: { id: Number(args.id) },
      });
    },
    deleteUserById: (parent, args, context: Context, info) => {
      return context.prisma.user.delete({
        where: { id: Number(args.id) },
      });
    },
  },
  User: {
    posts: (parent, args, context: Context, info) => {
      return context.prisma.user
        .findOne({
          where: { id: Number(parent.id) },
        })
        .posts();
    },
  },
};

export default users;
