import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderUpdateManyMutation = mutationField('updateManyOrder', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'OrderWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'OrderUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.order.updateMany(args);
  },
});
