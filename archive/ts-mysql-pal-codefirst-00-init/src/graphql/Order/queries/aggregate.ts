import { arg, list, queryField } from '@nexus/schema';

export const OrderAggregateQuery = queryField('aggregateOrder', {
  type: 'AggregateOrder',
  args: {
    where: 'OrderWhereInput',
    orderBy: list(arg({ type: 'OrderOrderByInput' })),
    cursor: 'OrderWhereUniqueInput',
    distinct: 'OrderScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.aggregate({ ...args, ...select });
  },
});
