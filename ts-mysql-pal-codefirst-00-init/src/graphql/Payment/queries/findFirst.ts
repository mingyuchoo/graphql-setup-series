import { arg, list, queryField } from '@nexus/schema';

export const PaymentFindFirstQuery = queryField('findFirstPayment', {
  type: 'Payment',
  args: {
    where: 'PaymentWhereInput',
    orderBy: list(arg({ type: 'PaymentOrderByInput' })),
    cursor: 'PaymentWhereUniqueInput',
    distinct: 'PaymentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.payment.findFirst({
      ...args,
      ...select,
    });
  },
});
