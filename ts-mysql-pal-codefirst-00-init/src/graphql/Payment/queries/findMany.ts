import { arg, list, nonNull, queryField } from '@nexus/schema';

export const PaymentFindManyQuery = queryField('findManyPayment', {
  type: nonNull(list(nonNull('Payment'))),
  args: {
    where: 'PaymentWhereInput',
    orderBy: list(arg({ type: 'PaymentOrderByInput' })),
    cursor: 'PaymentWhereUniqueInput',
    distinct: 'PaymentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.payment.findMany({
      ...args,
      ...select,
    });
  },
});
