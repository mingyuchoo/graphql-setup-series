import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderDetailUpdateManyMutation = mutationField('updateManyOrderDetail', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'OrderDetailWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'OrderDetailUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.orderDetail.updateMany(args);
  },
});
