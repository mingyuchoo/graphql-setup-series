import { arg, mutationField, nonNull } from '@nexus/schema';

export const PaymentUpsertOneMutation = mutationField('upsertOnePayment', {
  type: nonNull('Payment'),
  args: {
    where: nonNull(
      arg({
        type: 'PaymentWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'PaymentCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'PaymentUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.payment.upsert({
      ...args,
      ...select,
    });
  },
});
