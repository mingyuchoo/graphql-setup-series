import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductUpdateOneMutation = mutationField('updateOneProduct', {
  type: nonNull('Product'),
  args: {
    where: nonNull(
      arg({
        type: 'ProductWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'ProductUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.product.update({
      where,
      data,
      ...select,
    });
  },
});
