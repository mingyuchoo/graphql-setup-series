import { arg, list, nonNull, queryField } from '@nexus/schema';

export const PostFindManyQuery = queryField('findManyPost', {
  type: nonNull(list(nonNull('Post'))),
  args: {
    where: 'PostWhereInput',
    orderBy: list(arg({ type: 'PostOrderByInput' })),
    cursor: 'PostWhereUniqueInput',
    distinct: 'PostScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.post.findMany({
      ...args,
      ...select,
    });
  },
});
