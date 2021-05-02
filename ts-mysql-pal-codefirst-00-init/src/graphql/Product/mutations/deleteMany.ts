import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductDeleteManyMutation = mutationField('deleteManyProduct', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'ProductWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Product', where });
    return prisma.product.deleteMany({ where } as any);
  },
});
