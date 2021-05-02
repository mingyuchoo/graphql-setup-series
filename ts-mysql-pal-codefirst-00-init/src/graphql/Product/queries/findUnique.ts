import { arg, nonNull, queryField } from '@nexus/schema';

export const ProductFindUniqueQuery = queryField('findUniqueProduct', {
  type: 'Product',
  args: {
    where: arg({
      type: 'ProductWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.product.findUnique({
      where,
      ...select,
    });
  },
});
