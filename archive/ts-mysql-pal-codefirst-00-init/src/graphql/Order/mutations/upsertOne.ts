import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderUpsertOneMutation = mutationField('upsertOneOrder', {
  type: nonNull('Order'),
  args: {
    where: nonNull(
      arg({
        type: 'OrderWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'OrderCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'OrderUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.upsert({
      ...args,
      ...select,
    });
  },
});
