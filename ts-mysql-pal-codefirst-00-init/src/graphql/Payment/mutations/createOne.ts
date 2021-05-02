import { arg, mutationField, nonNull } from '@nexus/schema';

export const PaymentCreateOneMutation = mutationField('createOnePayment', {
  type: nonNull('Payment'),
  args: {
    data: nonNull(
      arg({
        type: 'PaymentCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.payment.create({
      data,
      ...select,
    });
  },
});
