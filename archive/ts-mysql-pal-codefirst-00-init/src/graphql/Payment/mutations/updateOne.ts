import { arg, mutationField, nonNull } from '@nexus/schema';

export const PaymentUpdateOneMutation = mutationField('updateOnePayment', {
  type: nonNull('Payment'),
  args: {
    where: nonNull(
      arg({
        type: 'PaymentWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'PaymentUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.payment.update({
      where,
      data,
      ...select,
    });
  },
});
