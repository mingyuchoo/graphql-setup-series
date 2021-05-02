import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductLineDeleteManyMutation = mutationField('deleteManyProductLine', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'ProductLineWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'ProductLine', where });
    return prisma.productLine.deleteMany({ where } as any);
  },
});
