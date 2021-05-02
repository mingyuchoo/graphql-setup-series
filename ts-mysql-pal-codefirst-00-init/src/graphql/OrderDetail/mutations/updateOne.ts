import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderDetailUpdateOneMutation = mutationField('updateOneOrderDetail', {
  type: nonNull('OrderDetail'),
  args: {
    where: nonNull(
      arg({
        type: 'OrderDetailWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'OrderDetailUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.orderDetail.update({
      where,
      data,
      ...select,
    });
  },
});
