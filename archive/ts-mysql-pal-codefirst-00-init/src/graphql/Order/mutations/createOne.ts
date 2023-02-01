import { arg, mutationField, nonNull } from '@nexus/schema';

export const OrderCreateOneMutation = mutationField('createOneOrder', {
  type: nonNull('Order'),
  args: {
    data: nonNull(
      arg({
        type: 'OrderCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.order.create({
      data,
      ...select,
    });
  },
});
