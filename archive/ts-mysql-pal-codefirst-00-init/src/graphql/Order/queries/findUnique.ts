import { arg, nonNull, queryField } from '@nexus/schema';

export const OrderFindUniqueQuery = queryField('findUniqueOrder', {
  type: 'Order',
  args: {
    where: arg({
      type: 'OrderWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.order.findUnique({
      where,
      ...select,
    });
  },
});
