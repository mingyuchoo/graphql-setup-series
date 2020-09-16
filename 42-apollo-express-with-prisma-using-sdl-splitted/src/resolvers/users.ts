// src/resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { Context } from '../context';

const users: IResolvers = {
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
};

export default users;
