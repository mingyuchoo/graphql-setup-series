// src/resolverMap.ts
import { IResolvers } from 'graphql-tools';

import { Context } from '../../../context';

const posts: IResolvers = {
  Query: {
    getCountOfPosts: async (parent, args, context: Context, info) => {
      return await context.prisma.post.count();
    },
    getCountOfPostsPublished: async (parent, args, context: Context, info) => {
      return await context.prisma.post.count({
        where: {
          published: true,
        },
      });
    },
    getAllPosts: async (parent, args, context: Context, info) => {
      return await context.prisma.post.findMany({});
    },
    getAllPostsPublished: async (parent, args, context: Context, info) => {
      return await context.prisma.post.findMany({
        where: { published: true },
      });
    },
    getOnePostById: async (parent, args, context: Context, info) => {
      return await context.prisma.post.findOne({
        where: { id: Number(args.id) },
      });
    },
  },
  Mutation: {
    createPostByEmail: async (parent, args, context: Context, info) => {
      return await context.prisma.post.create({
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
    updatePostById: async (parent, args, context: Context, info) => {
      return await context.prisma.post.update({
        data: {
          title: String(args.title),
          content: String(args.content),
          published: Boolean(args.published),
        },
        where: { id: Number(args.id) },
      });
    },
    deletePostById: async (parent, args, context: Context, info) => {
      return await context.prisma.post.delete({
        where: { id: Number(args.id) },
      });
    },
  },
  Post: {
    author: async (parent, args, context: Context, info) => {
      return await context.prisma.post
        .findOne({
          where: { id: Number(parent.id) },
        })
        .author();
    },
  },
};

export default posts;
