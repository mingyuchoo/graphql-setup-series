import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderDeleteManyMutation = mutationField('deleteManyOrder', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'OrderWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Order', where });
    return prisma.order.deleteMany({ where } as any);
  },
});
