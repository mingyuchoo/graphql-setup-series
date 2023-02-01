import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderDetailCreateOneMutation = mutationField('createOneOrderDetail', {
  type: nonNull('OrderDetail'),
  args: {
    data: nonNull(
      arg({
        type: 'OrderDetailCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.orderDetail.create({
      data,
      ...select,
    });
  },
});
