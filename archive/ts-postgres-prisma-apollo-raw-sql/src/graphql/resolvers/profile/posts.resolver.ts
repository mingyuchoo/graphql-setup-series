import { query } from 'express';
import { IResolvers } from 'graphql-tools';

import { Context } from '../../../context';

const posts: IResolvers = {
  Query: {
    getAllPosts: async (parent, args, context: Context) => {
      return await context.prisma.$queryRaw`
      SELECT *
      FROM public."Post";
      `;
    },
    getOnePostById: async (parent, args, context: Context) => {
      const queryResult = await context.prisma.$queryRaw`
      SELECT *
      FROM public."Post"
      WHERE id = ${Number(args.id)};
      `;

      return queryResult[0];
    },
  },
  Mutation: {
    createPostByEmail: async (parent, args, context: Context) => {
      let queryResult = await context.prisma.$queryRaw`
      SELECT id
      FROM public."User"
      WHERE email = ${String(args.email)}
      `;

      const authorId = Number(queryResult[0].id);

      await context.prisma.$executeRaw`
      INSERT INTO public."Post"(title, content, published, "authorId") 
      VALUES (
        ${String(args.title)},
        ${String(args.content)},
        ${false},
        ${authorId}
        );
      `;

      queryResult = await context.prisma.$queryRaw`
      SELECT *
      FROM public."Post"
      WHERE title = ${String(args.title)}
      AND "authorId" = ${authorId}
      `;

      return queryResult[0];
    },

    updatePostById: async (parent, args, context: Context) => {
      const executeResult = await context.prisma.$executeRaw`
      UPDATE public."Post"
      SET title = ${String(args.title)}
      , content = ${String(args.content)}
      , published = ${Boolean(args.published)}
      WHERE id = ${Number(args.id)}
      `;

      console.log(executeResult);
      const queryResult = await context.prisma.$queryRaw`
      SELECT *
      FROM public."Post"
      WHERE id = ${Number(args.id)}
      `;

      return queryResult[0];
    },
    deletePostById: async (parent, args, context: Context) => {
      const executeResult = await context.prisma.$executeRaw`
      DELETE
      FROM public."Post"
      WHERE id = ${Number(args.id)}
      `;

      console.log(executeResult);

      const queryResult = await context.prisma.$queryRaw`
      SELECT *
      FROM public."Post"
      WHERE id = ${Number(args.id)}
      `;

      return queryResult[0];
    },
  },
  Post: {
    author: async (parent, args, context: Context, info) => {
      const queryResult = await context.prisma.post
        .findOne({
          where: { id: Number(parent.id) },
        })
        .author();

      return queryResult;
    },
  },
};

export default posts;
