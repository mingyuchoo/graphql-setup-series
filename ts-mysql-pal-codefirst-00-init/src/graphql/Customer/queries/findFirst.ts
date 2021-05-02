import { arg, list, queryField } from '@nexus/schema';

export const CustomerFindFirstQuery = queryField('findFirstCustomer', {
  type: 'Customer',
  args: {
    where: 'CustomerWhereInput',
    orderBy: list(arg({ type: 'CustomerOrderByInput' })),
    cursor: 'CustomerWhereUniqueInput',
    distinct: 'CustomerScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.customer.findFirst({
      ...args,
      ...select,
    });
  },
});
