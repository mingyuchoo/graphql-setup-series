import { arg, nonNull, queryField } from '@nexus/schema';

export const ProductLineFindUniqueQuery = queryField('findUniqueProductLine', {
  type: 'ProductLine',
  args: {
    where: arg({
      type: 'ProductLineWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.productLine.findUnique({
      where,
      ...select,
    });
  },
});
