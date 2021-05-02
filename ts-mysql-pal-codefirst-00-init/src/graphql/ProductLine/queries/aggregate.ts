import { arg, list, queryField } from '@nexus/schema';

export const ProductLineAggregateQuery = queryField('aggregateProductLine', {
  type: 'AggregateProductLine',
  args: {
    where: 'ProductLineWhereInput',
    orderBy: list(arg({ type: 'ProductLineOrderByInput' })),
    cursor: 'ProductLineWhereUniqueInput',
    distinct: 'ProductLineScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.productLine.aggregate({ ...args, ...select });
  },
});
