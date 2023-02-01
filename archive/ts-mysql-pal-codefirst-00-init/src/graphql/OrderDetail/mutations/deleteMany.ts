import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderDetailDeleteManyMutation = mutationField('deleteManyOrderDetail', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'OrderDetailWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'OrderDetail', where });
    return prisma.orderDetail.deleteMany({ where } as any);
  },
});
