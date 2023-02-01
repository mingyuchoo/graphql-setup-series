import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderDetailDeleteOneMutation = mutationField('deleteOneOrderDetail', {
  type: 'OrderDetail',
  args: {
    where: nonNull(
      arg({
        type: 'OrderDetailWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'OrderDetail', where });
    return prisma.orderDetail.delete({
      where,
      ...select,
    });
  },
});
