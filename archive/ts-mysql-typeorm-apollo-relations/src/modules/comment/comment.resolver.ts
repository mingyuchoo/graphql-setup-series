import { IResolvers } from 'graphql-tools';
import { getRepository } from 'typeorm';

import { QueryCommentArgs } from '../../@types/codegen';
import { Comment, Post } from '../../entity';

export const resolvers: IResolvers = {
  Comment: {
    post: async (parent: Comment, args: unknown, context, info) => {
      // 방법 1: Repository를 이용한 방법으로 해결하지 못함
      // 방법 2: Query Builder를 이용한 방법
      return await getRepository(Post)
        .createQueryBuilder('post')
        .leftJoinAndSelect('post.comments', 'comment')
        .where('comment.id = :id', { id: parent.id })
        .getOneOrFail();
      // 방법 3: Raw Query를 이용한 방법으로 해결하지 못함
    },
  },
  Query: {
    comment: async (parent: Comment, args: QueryCommentArgs, context, info) => {
      const { where } = args;
      return await Comment.findOne({ where: { ...where } });
    },
    // TODO: comments
  },
  Mutation: {
    // TODO
  },
};
