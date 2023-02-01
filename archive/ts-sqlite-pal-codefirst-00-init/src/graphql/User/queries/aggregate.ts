import { arg, list, queryField } from '@nexus/schema';

export const UserAggregateQuery = queryField('aggregateUser', {
  type: 'AggregateUser',
  args: {
    where: 'UserWhereInput',
    orderBy: list(arg({ type: 'UserOrderByInput' })),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.user.aggregate({ ...args, ...select });
  },
});
