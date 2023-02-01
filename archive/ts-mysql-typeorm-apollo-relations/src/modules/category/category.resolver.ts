import { IResolvers } from 'graphql-tools';
import { getRepository } from 'typeorm';

import { QueryCategoryArgs } from '../../@types/codegen';
import { Category, Post } from '../../entity';

export const resolvers: IResolvers = {
  Category: {
    posts: async (parent: Category, args: unknown) => {
      const repository = getRepository(Post);
      // 방법 1: Repository 이용한 방법
      return await repository.find({ relations: ['categories'], where: { id: parent.id } });
    },
  },
  Query: {
    category: async (parent: Category, args: QueryCategoryArgs, context, info) => {
      const { where } = args;
      return await Category.findOne({ where: { ...where } });
    },
    // TODO: categories
  },
  Mutation: {
    // TODO
  },
};
