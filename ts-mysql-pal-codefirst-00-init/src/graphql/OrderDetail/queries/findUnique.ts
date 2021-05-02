import { arg, nonNull, queryField } from '@nexus/schema';

export const OrderDetailFindUniqueQuery = queryField('findUniqueOrderDetail', {
  type: 'OrderDetail',
  args: {
    where: arg({
      type: 'OrderDetailWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.orderDetail.findUnique({
      where,
      ...select,
    });
  },
});
