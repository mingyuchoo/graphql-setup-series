import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderDeleteOneMutation = mutationField('deleteOneOrder', {
  type: 'Order',
  args: {
    where: nonNull(
      arg({
        type: 'OrderWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Order', where });
    return prisma.order.delete({
      where,
      ...select,
    });
  },
});
