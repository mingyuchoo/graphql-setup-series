import { IResolvers } from 'graphql-tools';
import { getRepository, Repository } from 'typeorm';

import { MutationCreatePostArgs, QueryPostArgs } from '../../@types/codegen';
import { Post, User } from '../../entity';

export const resolvers: IResolvers = {
  Post: {
    author: async (parent: Post) => {
      const repository = getRepository(User);
      return await repository.findOne({ where: { id: parent.id } });
    },
  },
  Query: {
    // working with Repository (or Data Mapper Pattern)
    post: async (parent: Post, args: QueryPostArgs) => {
      const repository = getRepository(Post);
      const { id } = args;

      return await repository.findOne({ where: { id: id } });
    },
    // working with Repository (or Data Mapper Pattern)
    posts: async (parent: Post, args: unknown) => {
      const repository = getRepository(Post);
      return await repository.find();
    },
    // working with QueryBuilder and Repository (or Data Mapper Pattern)
    countPosts: async (parent: Post, args: unknown) => {
      const repository = getRepository(Post);
      const result: Repository<Post> = await repository
        .createQueryBuilder('post')
        .select('count(*)', 'count')
        .getRawOne();

      // eslint-disable-next-line @typescript-eslint/unbound-method
      return result.count;
    },
  },
  Mutation: {
    // working with Repository (or Data Mapper Pattern)
    createPost: async (parent: Post, args: MutationCreatePostArgs) => {
      const repository = getRepository(Post);
      const { title, content } = args;

      const post = new Post();
      post.title = title;
      post.content = content || undefined;

      const result = await repository.insert(post);
      return result.raw.insertId; // return Id of isnerted post
    },
  },
};
