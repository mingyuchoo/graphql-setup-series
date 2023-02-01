import { IResolvers } from 'graphql-tools';
import { DeepPartial, getRepository, Repository } from 'typeorm';

import { QueryUserArgs } from '../../@types/codegen';
import { Post, User } from '../../entity';

export const resolvers: IResolvers = {
  User: {
    posts: async (parent: User) => {
      const repository = getRepository(Post);
      return await repository.find({ where: { id: parent.id } });
    },
  },
  Query: {
    // working with  Entity Manager (or Active Record Pattern)
    user: async (parent: User, args: QueryUserArgs) => {
      const { id } = args;

      return await User.findOne({ where: { id: id } });
    },
    users: async (parent: User, args: unknown) => {
      return await User.find();
    },
  },
  // working with  Entity Manager (or Active Record Pattern)
  Mutation: {
    createUser: async (parent: User, args: DeepPartial<User>) => {
      const { firstName, lastName, age } = args;

      const savedUser = await User.create({
        firstName,
        lastName,
        age,
      }).save();

      return savedUser;
    },
  },
};
