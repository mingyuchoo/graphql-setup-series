import { arg, nonNull, queryField } from '@nexus/schema';

export const PaymentFindUniqueQuery = queryField('findUniquePayment', {
  type: 'Payment',
  args: {
    where: arg({
      type: 'PaymentWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.payment.findUnique({
      where,
      ...select,
    });
  },
});
