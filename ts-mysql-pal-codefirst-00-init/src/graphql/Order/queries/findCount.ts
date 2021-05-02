import { arg, list, nonNull, queryField } from '@nexus/schema';

export const OrderFindCountQuery = queryField('findManyOrderCount', {
  type: nonNull('Int'),
  args: {
    where: 'OrderWhereInput',
    orderBy: list(arg({ type: 'OrderOrderByInput' })),
    cursor: 'OrderWhereUniqueInput',
    distinct: 'OrderScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.order.count(args);
  },
});
