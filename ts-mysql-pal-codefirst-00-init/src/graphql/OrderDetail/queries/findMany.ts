import { arg, list, nonNull, queryField } from '@nexus/schema';

export const OrderDetailFindManyQuery = queryField('findManyOrderDetail', {
  type: nonNull(list(nonNull('OrderDetail'))),
  args: {
    where: 'OrderDetailWhereInput',
    orderBy: list(arg({ type: 'OrderDetailOrderByInput' })),
    cursor: 'OrderDetailWhereUniqueInput',
    distinct: 'OrderDetailScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderDetail.findMany({
      ...args,
      ...select,
    });
  },
});
