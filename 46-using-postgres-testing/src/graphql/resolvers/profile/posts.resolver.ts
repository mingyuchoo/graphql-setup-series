import { IResolvers } from 'graphql-tools';

import { Context } from '../../../context';

const posts: IResolvers = {
  Query: {
    getAllPosts: async (_, args, ctx: Context) => {
      return await ctx.prisma.post.findMany({});
    },
    getOnePostById: async (_, args, ctx: Context) => {
      return await ctx.prisma.post.findOne({
        where: { id: Number(args.id) },
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
