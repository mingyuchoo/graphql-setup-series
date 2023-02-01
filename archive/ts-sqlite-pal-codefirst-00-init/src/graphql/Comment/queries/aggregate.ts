import { arg, list, queryField } from '@nexus/schema';

export const CommentAggregateQuery = queryField('aggregateComment', {
  type: 'AggregateComment',
  args: {
    where: 'CommentWhereInput',
    orderBy: list(arg({ type: 'CommentOrderByInput' })),
    cursor: 'CommentWhereUniqueInput',
    distinct: 'CommentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.comment.aggregate({ ...args, ...select });
  },
});
