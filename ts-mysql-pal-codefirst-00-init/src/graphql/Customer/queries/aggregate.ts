import { arg, list, queryField } from '@nexus/schema';

export const CustomerAggregateQuery = queryField('aggregateCustomer', {
  type: 'AggregateCustomer',
  args: {
    where: 'CustomerWhereInput',
    orderBy: list(arg({ type: 'CustomerOrderByInput' })),
    cursor: 'CustomerWhereUniqueInput',
    distinct: 'CustomerScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.customer.aggregate({ ...args, ...select });
  },
});
