import { IResolvers } from 'graphql-tools';

import * as types from '../../@types';
import { Context } from '../../context';

const Post: IResolvers = {
  // move from user.resolver.ts because break up my schema by concern, not by type.
  User: {
    posts: async (parent: types.User, args, context: Context) => {
      return await context.prisma.user
        .findOne({
          where: { id: parent.id },
        })
        .posts();
    },
  },
  Query: {
    feed: async (parent, args, context: Context) => {
      return await context.prisma.post.findMany({
        where: { published: true },
      });
    },
    posts: async (parent, args: types.QueryPostsArgs, context: Context) => {
      return await context.prisma.post.findMany({
        ...args,
      });
    },
    post: async (parent, args: types.QueryPostArgs, context: Context) => {
      return await context.prisma.post.findOne({
        ...args,
      });
    },
    searchPosts: async (parent, args: types.QuerySearchPostsArgs, context: Context) => {
      return await context.prisma.post.findMany({
        where: {
          OR: [
            { title: { contains: args.searchString === null ? '' : args.searchString } },
            { content: { contains: args.searchString === null ? '' : args.searchString } },
          ],
        },
      });
    },
  },
  Mutation: {
    createPostByEmail: async (parent, args: types.MutationCreatePostByEmailArgs, context: Context) => {
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
    updateOnePost: async (parent, args: types.MutationUpdateOnePostArgs, context: Context) => {
      return await context.prisma.post.update({
        data: {
          title: args.title,
          content: args.content,
        },
        where: args.where,
      });
    },
    publish: async (parent, args: types.MutationPublishArgs, context: Context) => {
      return await context.prisma.post.update({
        data: {
          published: true,
        },
        where: args.where,
      });
    },
    deleteOnePost: async (parent, args: types.MutationDeleteOnePostArgs, context: Context) => {
      return await context.prisma.post.delete({
        ...args,
      });
    },
  },
};

export default Post;
