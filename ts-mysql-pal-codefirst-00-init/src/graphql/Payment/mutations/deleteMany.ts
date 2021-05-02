import { arg, mutationField, nonNull } from '@nexus/schema';

export const PaymentDeleteManyMutation = mutationField('deleteManyPayment', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'PaymentWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Payment', where });
    return prisma.payment.deleteMany({ where } as any);
  },
});
