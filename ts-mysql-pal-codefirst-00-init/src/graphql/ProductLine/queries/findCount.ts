import { arg, list, nonNull, queryField } from '@nexus/schema';

export const ProductLineFindCountQuery = queryField('findManyProductLineCount', {
  type: nonNull('Int'),
  args: {
    where: 'ProductLineWhereInput',
    orderBy: list(arg({ type: 'ProductLineOrderByInput' })),
    cursor: 'ProductLineWhereUniqueInput',
    distinct: 'ProductLineScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.productLine.count(args);
  },
});
