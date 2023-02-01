import { booleanArg, extendType, objectType, stringArg } from '@nexus/schema';

import { Context } from '../types';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.title();
    t.model.content();
    t.model.published();
    t.model.authorId();
    t.model.author();
    t.model.categories();
    t.model.comments();
    t.model.keywords();
    t.model.tags();
    // a custom filed
    t.string('uppercaseTitle', {
      resolve: (parent, args, context) => parent.title.toUpperCase(),
    });
  },
});

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.post();
    t.crud.posts({
      type: 'Post',
      pagination: true,
      filtering: true,
      ordering: true,
    });
    // TODO https://www.prisma.io/docs/concepts/components/prisma-client/filtering
    t.field('countPosts', {
      type: 'Int',
      args: {
        title: stringArg({ nullable: true }),
        published: booleanArg({ nullable: false }),
      },
      resolve: (parent, args, context: Context, info) => {
        return context.prisma.post.count({
          where: {
            OR: [
              {
                title: {
                  contains: args.title,
                },
              },
              {
                content: {
                  contains: args.title,
                },
              },
            ],
            AND: { published: args.published },
          },
        });
      },
    });
  },
});

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePost({ alias: 'createPost' });
    t.crud.updateOnePost({ alias: 'updatePost' });
    t.crud.deleteOnePost({ alias: 'deletePost' });
    t.crud.updateManyPost({ alias: 'updatePosts' });
    t.crud.deleteManyPost({ alias: 'deletePosts' });
    t.field('createDraft', {
      type: 'Post',
      args: {
        title: stringArg({ nullable: false }),
        content: stringArg(),
        authorId: stringArg({ nullable: false }),
      },
      resolve: (parent, args, context: Context, info) => {
        return context.prisma.post.create({
          data: {
            title: args.title,
            content: args.content,
            author: {
              connect: { id: Number(args.authorId) },
            },
          },
        });
      },
    });
  },
});
