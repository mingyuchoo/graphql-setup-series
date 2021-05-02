import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderUpdateOneMutation = mutationField('updateOneOrder', {
  type: nonNull('Order'),
  args: {
    where: nonNull(
      arg({
        type: 'OrderWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'OrderUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.order.update({
      where,
      data,
      ...select,
    });
  },
});
