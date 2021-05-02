import { arg, list, nonNull, queryField } from '@nexus/schema';

export const CustomerFindManyQuery = queryField('findManyCustomer', {
  type: nonNull(list(nonNull('Customer'))),
  args: {
    where: 'CustomerWhereInput',
    orderBy: list(arg({ type: 'CustomerOrderByInput' })),
    cursor: 'CustomerWhereUniqueInput',
    distinct: 'CustomerScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.customer.findMany({
      ...args,
      ...select,
    });
  },
});
