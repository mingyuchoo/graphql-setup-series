import { arg, list, nonNull, queryField } from '@nexus/schema';

export const ProductLineFindManyQuery = queryField('findManyProductLine', {
  type: nonNull(list(nonNull('ProductLine'))),
  args: {
    where: 'ProductLineWhereInput',
    orderBy: list(arg({ type: 'ProductLineOrderByInput' })),
    cursor: 'ProductLineWhereUniqueInput',
    distinct: 'ProductLineScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.productLine.findMany({
      ...args,
      ...select,
    });
  },
});
