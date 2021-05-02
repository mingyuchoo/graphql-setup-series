import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductDeleteOneMutation = mutationField('deleteOneProduct', {
  type: 'Product',
  args: {
    where: nonNull(
      arg({
        type: 'ProductWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Product', where });
    return prisma.product.delete({
      where,
      ...select,
    });
  },
});
