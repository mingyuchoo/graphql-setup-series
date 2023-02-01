import { IResolvers } from 'graphql-tools';
import { getRepository } from 'typeorm';

import { QueryProfileArgs } from '../../@types/codegen';
import { Profile, User } from '../../entity';

export const resolvers: IResolvers = {
  Profile: {
    user: async (parent: Profile, args: unknown) => {
      const repository = getRepository(User);
      return await repository.findOne({ where: { id: parent.id } });
    },
  },
  Query: {
    profile: async (parent: Profile, args: QueryProfileArgs) => {
      const { where } = args;
      return await Profile.findOne({ where: { ...where } });
    },
    // TODO: profiles
  },
  Mutation: {
    // TODO
  },
};
