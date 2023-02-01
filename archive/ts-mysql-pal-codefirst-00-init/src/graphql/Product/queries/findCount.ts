import { arg, list, nonNull, queryField } from '@nexus/schema';

export const ProductFindCountQuery = queryField('findManyProductCount', {
  type: nonNull('Int'),
  args: {
    where: 'ProductWhereInput',
    orderBy: list(arg({ type: 'ProductOrderByInput' })),
    cursor: 'ProductWhereUniqueInput',
    distinct: 'ProductScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.product.count(args);
  },
});
