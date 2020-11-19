import { IResolvers } from 'graphql-tools';

import { Context } from '../../context';

const Post: IResolvers = {
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
    feed: async (_, args, context: Context) => {
      return await context.prisma.post.findMany({
        where: { published: true },
      });
    },
    posts: async (parent, args, context: Context) => {
      return await context.prisma.post.findMany({
        ...args,
      });
    },
    post: async (parent, args, context: Context) => {
      return await context.prisma.post.findOne({
        ...args,
      });
    },
    searchPosts: async (parent, { searchString }, context: Context) => {
      return await context.prisma.post.findMany({
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
    createPostByEmail: async (parent, args, context: Context) => {
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
    updateOnePost: async (parent, args, context: Context) => {
      return await context.prisma.post.update({
        data: {
          title: args.title,
          content: args.content,
        },
        where: args.where,
      });
    },
    publish: async (parent, args, context: Context) => {
      return await context.prisma.post.update({
        data: {
          published: true,
        },
        where: args.where,
      });
    },
    deleteOnePost: async (parent, args, context: Context) => {
      return await context.prisma.post.delete({
        ...args,
      });
    },
  },
};

export default Post;
