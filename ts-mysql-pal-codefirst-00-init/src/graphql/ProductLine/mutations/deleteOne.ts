import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductLineDeleteOneMutation = mutationField('deleteOneProductLine', {
  type: 'ProductLine',
  args: {
    where: nonNull(
      arg({
        type: 'ProductLineWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'ProductLine', where });
    return prisma.productLine.delete({
      where,
      ...select,
    });
  },
});
