import { arg, list, queryField } from '@nexus/schema';

export const PostAggregateQuery = queryField('aggregatePost', {
  type: 'AggregatePost',
  args: {
    where: 'PostWhereInput',
    orderBy: list(arg({ type: 'PostOrderByInput' })),
    cursor: 'PostWhereUniqueInput',
    distinct: 'PostScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.post.aggregate({ ...args, ...select }) as any;
  },
});
