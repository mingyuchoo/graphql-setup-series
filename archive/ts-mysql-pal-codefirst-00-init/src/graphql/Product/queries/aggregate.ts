import { arg, list, queryField } from '@nexus/schema';

export const ProductAggregateQuery = queryField('aggregateProduct', {
  type: 'AggregateProduct',
  args: {
    where: 'ProductWhereInput',
    orderBy: list(arg({ type: 'ProductOrderByInput' })),
    cursor: 'ProductWhereUniqueInput',
    distinct: 'ProductScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.product.aggregate({ ...args, ...select });
  },
});
