import { IResolvers } from 'graphql-tools';
import { getRepository } from 'typeorm';

import { MutationCreatePostArgs, QueryPostArgs, QueryPostsArgs } from '../../@types/codegen';
import { Category, Comment, Post, Tag, User } from '../../entity';

export const resolvers: IResolvers = {
  Post: {
    author: async (parent: Post, args) => {
      return await User.findOne({ where: { id: parent.id } });
    },
    categories: async (parent: Post, args) => {
      return await Category.find({ where: { id: parent.id } });
    },
    comments: async (parent: Post, args) => {
      return await Comment.find({ where: { id: parent.id } });
    },
    tags: async (parent: Post, args) => {
      return await Tag.find({ where: { id: parent.id } });
    },
  },
  Query: {
    // working with Repository (or Data Mapper Pattern)
    post: async (parent: Post, args: QueryPostArgs) => {
      const repository = getRepository(Post);
      const { where } = args;
      return await repository.findOne({ where: { ...where } });
    },
    // working with Repository (or Data Mapper Pattern)
    posts: async (parent: Post, args: QueryPostsArgs) => {
      const repository = getRepository(Post);
      const id = args.where?.id?.equals;
      return await repository.find({ where: { id: id } });
    },
  },
  Mutation: {
    // working with Repository (or Data Mapper Pattern)
    createPost: async (parent: Post, args: MutationCreatePostArgs) => {
      const repository = getRepository(Post);
      const { data } = args;

      const post = new Post();
      post.title = data.title;
      post.content = data.content || undefined;

      const result = await repository.insert(post);
      return result.raw.insertId; // return Id of isnerted post
    },
  },
};
