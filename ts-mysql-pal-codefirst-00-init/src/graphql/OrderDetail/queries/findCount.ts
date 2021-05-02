import { arg, list, nonNull, queryField } from '@nexus/schema';

export const OrderDetailFindCountQuery = queryField('findManyOrderDetailCount', {
  type: nonNull('Int'),
  args: {
    where: 'OrderDetailWhereInput',
    orderBy: list(arg({ type: 'OrderDetailOrderByInput' })),
    cursor: 'OrderDetailWhereUniqueInput',
    distinct: 'OrderDetailScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.orderDetail.count(args);
  },
});
