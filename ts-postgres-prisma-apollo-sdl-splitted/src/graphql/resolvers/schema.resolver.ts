import { IResolvers } from 'graphql-tools';

import * as types from '../../@types/codegen';
import { Context } from '../../context';

const Schema: IResolvers = {
  Category: {
    posts: async (parent, args, context, info) => {
      return await context.prisma.category
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .posts();
    },
  },
  Comment: {
    post: async (parent, args, context, info) => {
      return await context.prisma.comment
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .post();
    },
  },
  Post: {
    author: async (parent, args, context, info) => {
      return await context.prisma.post
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .author();
    },
    categories: async (parent, args, context, info) => {
      return await context.prisma.post
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .categories();
    },
    comments: async (parent, args, context, info) => {
      return await context.prisma.post
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .comments();
    },
    tags: async (parent, args, context, info) => {
      return await context.prisma.post
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .tags();
    },
  },
  Profile: {
    user: async (parent, args, context, info) => {
      return await context.prisma.profile
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .user();
    },
  },
  User: {
    posts: async (parent, args, context, info) => {
      return await context.prisma.user
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .posts();
    },
    profile: async (parent, args, context, info) => {
      return await context.prisma.user
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .profile();
    },
  },
  Tag: {
    // noting to do
  },
  Query: {
    categories: async (parent, args, context, info) => {
      return await context.prisma.category.findMany({
        take: Number(args.take),
      });
    },
    comments: async (parent, args, context, info) => {
      return await context.prisma.comment.findMany({
        take: Number(args.take),
      });
    },
    posts: async (parent, args, context, info) => {
      return await context.prisma.post.findMany({
        take: Number(args.take),
      });
    },
    profiles: async (parent, args, context, info) => {
      return await context.prisma.profile.findMany({
        take: Number(args.take),
      });
    },
    users: async (parent, args, context, info) => {
      return await context.prisma.user.findMany({
        take: Number(args.take),
      });
    },
    tags: async (parent, args, context, info) => {
      return await context.prisma.tag.findMany({
        take: Number(args.take),
      });
    },
  },
};

export default Schema;
