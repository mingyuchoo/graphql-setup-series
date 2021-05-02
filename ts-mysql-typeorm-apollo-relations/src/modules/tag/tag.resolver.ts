import { IResolvers } from 'graphql-tools';
import { getRepository, getManager } from 'typeorm';

import { QueryTagArgs } from '../../@types/codegen';
import { Post, Tag } from '../../entity';

export const resolvers: IResolvers = {
  Tag: {
    posts: async (parent: Tag, args: unknown) => {
      const repository = getRepository(Post);
      return await repository.find({ relations: ['tags'] });
    },
  },
  Query: {
    tag: async (parent: Tag, args: QueryTagArgs) => {
      const { where } = args;
      return await Tag.findOne({ where: { ...where } });
    },
    // TODO: tags
  },
  Mutation: {
    // TODO
  },
};
