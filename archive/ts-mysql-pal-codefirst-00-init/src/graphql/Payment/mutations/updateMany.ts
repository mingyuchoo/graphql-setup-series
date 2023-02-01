import { arg, mutationField, nonNull } from '@nexus/schema';

export const PaymentUpdateManyMutation = mutationField('updateManyPayment', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'PaymentWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'PaymentUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.payment.updateMany(args);
  },
});
