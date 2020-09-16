// src/resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { Context } from './context';

const resolvers: IResolvers = {
  Query: {
    getAllPosts: (parent, args, context: Context) => {
      return context.prisma.post.findMany({});
    },
    getOnePostById: (parent, args, context: Context) => {
      return context.prisma.post.findOne({
        where: { id: Number(args.id) },
      });
    },
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
    createPostByEmail: (parent, args, context: Context) => {
      return context.prisma.post.create({
        data: {
          title: String(args.title),
          content: String(args.content),
          published: false,
          author: {
            connect: { email: String(args.email) },
          },
        },
      });
    },
    updatePostById: (parent, args, context: Context) => {
      return context.prisma.post.update({
        data: {
          title: String(args.title),
          content: String(args.content),
          published: Boolean(args.published),
        },
        where: { id: Number(args.id) },
      });
    },
    deletePostById: (parent, args, context: Context) => {
      return context.prisma.post.delete({
        where: { id: Number(args.id) },
      });
    },
    createUserByEmail: (parent, args, context: Context) => {
      return context.prisma.user.create({
        data: {
          email: String(args.email),
          name: String(args.name),
        },
      });
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
    posts: (parent, args, context: Context) => {
      return context.prisma.user
        .findOne({
          where: { id: Number(parent.id) },
        })
        .posts();
    },
  },
  Post: {
    author: (parent, args, context: Context) => {
      return context.prisma.post
        .findOne({
          where: { id: Number(parent.id) },
        })
        .author();
    },
  },
};

export default resolvers;
