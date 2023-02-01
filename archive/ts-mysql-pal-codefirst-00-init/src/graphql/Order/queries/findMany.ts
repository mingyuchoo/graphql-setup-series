import { arg, list, nonNull, queryField } from '@nexus/schema';

export const OrderFindManyQuery = queryField('findManyOrder', {
  type: nonNull(list(nonNull('Order'))),
  args: {
    where: 'OrderWhereInput',
    orderBy: list(arg({ type: 'OrderOrderByInput' })),
    cursor: 'OrderWhereUniqueInput',
    distinct: 'OrderScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.findMany({
      ...args,
      ...select,
    });
  },
});
