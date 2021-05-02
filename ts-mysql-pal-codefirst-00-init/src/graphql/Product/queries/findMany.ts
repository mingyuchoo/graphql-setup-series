import { arg, list, nonNull, queryField } from '@nexus/schema';

export const ProductFindManyQuery = queryField('findManyProduct', {
  type: nonNull(list(nonNull('Product'))),
  args: {
    where: 'ProductWhereInput',
    orderBy: list(arg({ type: 'ProductOrderByInput' })),
    cursor: 'ProductWhereUniqueInput',
    distinct: 'ProductScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.product.findMany({
      ...args,
      ...select,
    });
  },
});
