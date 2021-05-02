import { arg, nonNull, queryField } from '@nexus/schema';

export const PostFindUniqueQuery = queryField('findUniquePost', {
  type: 'Post',
  args: {
    where: arg({
      type: 'PostWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.post.findUnique({
      where,
      ...select,
    });
  },
});
