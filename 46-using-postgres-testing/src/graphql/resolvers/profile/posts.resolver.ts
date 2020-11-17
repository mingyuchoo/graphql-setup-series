import { IResolvers } from 'graphql-tools';

import { Context } from '../../../context';

const posts: IResolvers = {
  Query: {
    posts: async (_, args, ctx: Context) => {
      return await ctx.prisma.post.findMany({
        ...args,
      });
    },
    post: async (_, args, ctx: Context) => {
      return await ctx.prisma.post.findOne({
        ...args,
      });
    },
    searchPosts: async (_, { searchString }, ctx: Context) => {
      return await ctx.prisma.post.findMany({
        where: {
          OR: [
            { title: { contains: searchString === null ? '' : searchString } },
            { content: { contains: searchString === null ? '' : searchString } },
          ],
        },
      });
    },
  },
  Mutation: {
    createPostByEmail: async (_, args, ctx: Context) => {
      return await ctx.prisma.post.create({
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
    updatePostById: async (_, args, ctx: Context) => {
      return await ctx.prisma.post.update({
        data: {
          title: String(args.title),
          content: String(args.content),
          published: Boolean(args.published),
        },
        where: { id: Number(args.id) },
      });
    },
    deletePostById: async (_, args, ctx: Context) => {
      return await ctx.prisma.post.delete({
        where: { id: Number(args.id) },
      });
    },
  },
  Post: {
    author: async (_, args, ctx: Context, info) => {
      return await ctx.prisma.post
        .findOne({
          where: { id: Number(_.id) },
        })
        .author();
    },
  },
};

export default posts;
