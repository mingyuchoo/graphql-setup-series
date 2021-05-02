import { arg, list, queryField } from '@nexus/schema';

export const ProductLineFindFirstQuery = queryField('findFirstProductLine', {
  type: 'ProductLine',
  args: {
    where: 'ProductLineWhereInput',
    orderBy: list(arg({ type: 'ProductLineOrderByInput' })),
    cursor: 'ProductLineWhereUniqueInput',
    distinct: 'ProductLineScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.productLine.findFirst({
      ...args,
      ...select,
    });
  },
});
