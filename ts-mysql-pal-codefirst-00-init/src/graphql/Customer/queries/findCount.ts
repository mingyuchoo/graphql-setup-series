import { arg, list, nonNull, queryField } from '@nexus/schema';

export const CustomerFindCountQuery = queryField('findManyCustomerCount', {
  type: nonNull('Int'),
  args: {
    where: 'CustomerWhereInput',
    orderBy: list(arg({ type: 'CustomerOrderByInput' })),
    cursor: 'CustomerWhereUniqueInput',
    distinct: 'CustomerScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.customer.count(args);
  },
});
