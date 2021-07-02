import { IResolvers } from 'graphql-tools';
import { DeepPartial, getManager, getRepository } from 'typeorm';

import { QueryUserArgs } from '../../@types/codegen';
import { Post, User } from '../../entity';

export const resolvers: IResolvers = {
  User: {
    posts: async (parent: User) => {
      const repository = getRepository(Post);

      // // 방법 1: Repository 이용한 방법
      // return await repository.find({ relations: ['author'], where: { author: parent.id } });

      // 방법 2: Query Builder를 이용한 방법
      return await getRepository(Post)
        .createQueryBuilder('post')
        .leftJoinAndSelect('post.author', 'user')
        .where('user.id = :id', { id: parent.id })
        .getMany();

      // 방법 3: Raw Query를 이용한 방법으로 해결하지 못함
    },
    profile: async (parent, args, context, info) => {
      return await context.prisma.user
        .findUnique({
          where: { id: Number(parent.id) },
        })
        .profile();
    },
  },
  Query: {
    // working with  Entity Manager (or Active Record Pattern)
    user: async (parent: User, args: QueryUserArgs) => {
      const { where } = args;
      return await User.findOne({ where: { ...where } });
    },
    users: async (parent: User, args: unknown) => {
      return await User.find();
    },
  },
  // working with  Entity Manager (or Active Record Pattern)
  Mutation: {
    createUser: async (parent: User, args: DeepPartial<User>) => {
      const { firstName, lastName } = args;

      const savedUser = await User.create({
        firstName,
        lastName,
      }).save();

      return savedUser;
    },
  },
};
