import { arg, mutationField, nonNull } from '@nexus/schema';

export const PaymentDeleteOneMutation = mutationField('deleteOnePayment', {
  type: 'Payment',
  args: {
    where: nonNull(
      arg({
        type: 'PaymentWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Payment', where });
    return prisma.payment.delete({
      where,
      ...select,
    });
  },
});
