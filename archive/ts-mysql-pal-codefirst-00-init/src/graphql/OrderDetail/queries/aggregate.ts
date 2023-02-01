import { arg, list, queryField } from '@nexus/schema';

export const OrderDetailAggregateQuery = queryField('aggregateOrderDetail', {
  type: 'AggregateOrderDetail',
  args: {
    where: 'OrderDetailWhereInput',
    orderBy: list(arg({ type: 'OrderDetailOrderByInput' })),
    cursor: 'OrderDetailWhereUniqueInput',
    distinct: 'OrderDetailScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderDetail.aggregate({ ...args, ...select });
  },
});
