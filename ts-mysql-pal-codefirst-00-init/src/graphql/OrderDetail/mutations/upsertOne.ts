import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderDetailUpsertOneMutation = mutationField('upsertOneOrderDetail', {
  type: nonNull('OrderDetail'),
  args: {
    where: nonNull(
      arg({
        type: 'OrderDetailWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'OrderDetailCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'OrderDetailUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderDetail.upsert({
      ...args,
      ...select,
    });
  },
});
