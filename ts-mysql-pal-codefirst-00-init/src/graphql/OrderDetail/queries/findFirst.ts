import { arg, list, queryField } from '@nexus/schema';

export const OrderDetailFindFirstQuery = queryField('findFirstOrderDetail', {
  type: 'OrderDetail',
  args: {
    where: 'OrderDetailWhereInput',
    orderBy: list(arg({ type: 'OrderDetailOrderByInput' })),
    cursor: 'OrderDetailWhereUniqueInput',
    distinct: 'OrderDetailScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderDetail.findFirst({
      ...args,
      ...select,
    });
  },
});
