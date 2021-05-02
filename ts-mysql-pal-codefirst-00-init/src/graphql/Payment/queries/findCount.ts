import { arg, list, nonNull, queryField } from '@nexus/schema';

export const PaymentFindCountQuery = queryField('findManyPaymentCount', {
  type: nonNull('Int'),
  args: {
    where: 'PaymentWhereInput',
    orderBy: list(arg({ type: 'PaymentOrderByInput' })),
    cursor: 'PaymentWhereUniqueInput',
    distinct: 'PaymentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.payment.count(args);
  },
});
